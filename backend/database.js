const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

async function getProducts() {
  const [rows] = await pool.query(`
        SELECT * FROM products
        INNER JOIN productcategories
        ON products.ProductCategoryID = productcategories.CategoryID
    `);
  return rows;
}

async function getProductOptions() {
  const [rows] = await pool.query(`
    SELECT pr.ProductID, op.OptionName,og.OptionGroupName
    FROM productoptions po
    LEFT JOIN products pr ON pr.ProductID = po.ProductID
    LEFT JOIN options op ON op.OptionID = po.OptionID
    LEFT JOIN optiongroups og ON og.OptionGroupID = op.OptionGroupID;
    `);
  return rows;
}

async function getSingleProduct(id) {
  const [rows] = await pool.query(
    "SELECT * FROM products WHERE ProductID = ?",
    [id]
  );
  return rows;
}

async function getSingleUser(email) {
  const [rows] = await pool.query(
    "SELECT * FROM users WHERE UserEmail = ?",
    [email]
  );
  return rows;
}

async function registerUser(user) {
  const {
    userEmail,
    userPassword,
    userFirstName,
    userLastName,
    userCity,
    userState,
    userZip,
    userPhone,
    userCountry,
    userAddress,
  } = user;

  const [result] = await pool.query(
    `
    INSERT INTO users (
      UserEmail,
      UserPassword,
      UserFirstName,
      UserLastName,
      UserCity,
      UserState,
      UserZip,
      UserPhone,
      UserCountry,
      UserAddress
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `,
    [
      userEmail,
      userPassword,
      userFirstName,
      userLastName,
      userCity,
      userState,
      userZip,
      userPhone,
      userCountry,
      userAddress,
    ]
  );

  return result;
}

async function loginUser(userEmail, userPassword) {
  const [rows] = await pool.query(
    "SELECT * FROM users WHERE UserEmail = ? AND UserPassword = ?",
    [userEmail, userPassword] 
  );

  if (rows.length > 0) {
    return rows[0];
  }

  return null;
}


// orders functions 

// async function createOrder(order) {
//   const {
//     OrderUserID,
//     OrderAmount,
//     OrderShipping,
//     OrderDate,
//     payment_status,
//     FullfillmentStatus,
//   } = order;

//   try {
//     const [result] = await pool.query(
//       `
//       INSERT INTO orders (
//         OrderUserID,
//         OrderAmount,
//         OrderShipping,
//         OrderDate,
//         payment_status,
//         FullfillmentStatus
//       ) VALUES (?, ?, ?, ?, ?, ?)
//       `,
//       [
//         OrderUserID,
//         OrderAmount,
//         OrderShipping,
//         OrderDate || new Date(), // If OrderDate is not provided, use the current timestamp
//         payment_status || 'UnPaid',
//         FullfillmentStatus || 'Unfulfilled',
//       ]
//     );

//     return result.insertId; // Return the ID of the inserted order
//   } catch (error) {
//     console.error('Error creating order:', error);
//     throw error; // Re-throw the error for handling at a higher level
//   }
// }

async function createOrder(order) {
  const {
    OrderUserID,
    OrderAmount,
    OrderShipping,
    payment_status,
    FullfillmentStatus,
    products, // Array of products with details (ProductID and Quantity)
  } = order;

  const connection = await pool.getConnection();
  await connection.beginTransaction();

  try {
    // Insert into orders table
    const [orderResult] = await connection.query(
      `
      INSERT INTO orders (
        OrderUserID,
        OrderAmount,
        OrderShipping,
        payment_status,
        FullfillmentStatus
      ) VALUES (?, ?, ?, ?, ?)
      `,
      [OrderUserID, OrderAmount, OrderShipping, payment_status, FullfillmentStatus]
    );

    const orderID = orderResult.insertId;

    // Insert into orderdetails table
    for (const product of products) {
      await connection.query(
        `
        INSERT INTO orderdetails (
          DetailOrderID,
          DetailProductID,
          DetailQuantity
        ) VALUES (?, ?, ?)
        `,
        [orderID, product.ProductID, product.Quantity]
      );
    }

    await connection.commit();
    return orderID;
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    connection.release();
  }
}
async function getOrdersByUserID(userId) {
  const [rows] = await pool.query(
    "SELECT * FROM orders WHERE OrderUserID = ?",
    [userId]
  );
  return rows;
}

module.exports = {
  getProducts: getProducts,
  getSingleProduct: getSingleProduct,
  getProductOptions: getProductOptions,
  registerUser: registerUser,
  loginUser: loginUser,
  getSingleUser : getSingleUser,
  createOrder: createOrder,
  getOrdersByUserID: getOrdersByUserID,
};
