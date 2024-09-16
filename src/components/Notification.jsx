// import React, { useState, useEffect } from "react";

// const Notification = () => {
//   const [notifications, setNotifications] = useState([]);

//   useEffect(() => {
//     const notificationSocket = new WebSocket(
//       "ws://127.0.0.1:8000/ws/notifications/"
//     );

//     notificationSocket.onopen = function() {
//       console.log("WebSocket connection opened");
//     };

//     notificationSocket.onmessage = function(e) {
//       console.log("WebSocket message received:", e.data);
//       const data = JSON.parse(e.data);
//       setNotifications((prev) => [...prev, data.notification]);
//     };

//     notificationSocket.onerror = function(error) {
//       console.error("WebSocket error:", error);
//     };

//     notificationSocket.onclose = function(e) {
//       console.error("Notification socket closed unexpectedly");
//     };

//     return () => notificationSocket.close();
//   }, []);

//   return (
//     <div>
//       <h2>Notifications</h2>
//       <ul>
//         {notifications.map((notification, index) => (
//           <li key={index}>{notification}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Notification;