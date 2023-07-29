// import React from "react";
// import { toast, Toaster } from "react-hot-toast";

// const App = () => {
//   const randomUser = new Promise((res) =>
//     fetch("https://randomuser.me/api/")
//       .then((res) => res.json())
//       .then((json) => setTimeout(() => res(json), 4000))
//   );
//   const btn = () => {
//     toast.promise(randomUser, {
//       loading: "fetching user details ...",
//       success: "Welcome user",
//       error: "Error logging in",
//     });
//   };
//   return (
//     <>
//       <div>
//         <button onClick={btn}>Get random user</button>
//       </div>
//       <Toaster />
//     </>
//   );
// };

// export default App;

// import React, { useState } from "react";
// import { toast, Toaster } from "react-hot-toast";

// const App = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [randomUser, setRandomUser] = useState(null);

//   const handleAction = () => {
//     setIsLoading(true);

//     // Simulating an asynchronous operation
//     const promise = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         // Fetch random user data
//         fetch("https://randomuser.me/api/")
//           .then((response) => response.json())
//           .then((data) => {
//             setRandomUser(data.results[0]);
//             resolve();
//           })
//           .catch((error) => reject(error));
//       }, 2000);
//     });

//     // Show loading toast until the promise is resolved or rejected
//     toast
//       .promise(promise, {
//         loading: "Fetching random user details...",
//         success: "User logged in",
//         error: "An error occurred",
//       })
//       .then(() => {
//         setIsLoading(false);
//       })
//       .catch(() => {
//         setIsLoading(false);
//       });
//   };

//   return (
//     <div className="app">
//       {isLoading && <div>hey</div>}
//       {randomUser && (
//         <div>
//           <h3 className="header">Random User:</h3>
//           <p className="name">
//             Welcome{" "}
//             <span className="name1">
//               {" "}
//               {`${randomUser.name.first} ${randomUser.name.last}`}
//             </span>
//           </p>
//           <p className="email"> {randomUser.email}</p>

//           <button onClick={handleAction} className="btn">
//             Fetch Random User
//           </button>
//         </div>
//       )}
//       <Toaster />
//     </div>
//   );
// };

// export default App;

// import React, { useState } from "react";
// import { toast, Toaster } from "react-hot-toast";

// const App = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [randomUser, setRandomUser] = useState(null);

//   const handleAction = () => {
//     setIsLoading(true);

//     // Simulating an asynchronous operation
//     const promise = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         // Fetch random user data
//         fetch("https://randomuser.me/api/")
//           .then((response) => response.json())
//           .then((data) => {
//             setRandomUser(data.results[0]);
//             resolve();
//           })
//           .catch((error) => reject(error));
//       }, 2000);
//     });

//     // Show loading toast until the promise is resolved or rejected
//     toast
//       .promise(promise, {
//         loading: "Fetching random user details...",
//         success: "User logged in",
//         error: "An error occurred",
//       })
//       .then(() => {
//         setIsLoading(false);
//       })
//       .catch(() => {
//         setIsLoading(false);
//       });
//   };

//   return (
//     <div className="app">
//       {isLoading && <div></div>}
//       {randomUser && (
//         <div>
//           <h3 className="header">Random User:</h3>
//           <p className="name">
//             Welcome{" "}
//             <span className="name1">
//               {" "}
//               {`${randomUser.name.first} ${randomUser.name.last}`}
//             </span>
//           </p>
//           <p className="email"> {randomUser.email}</p>
//           {/* Add more fields as needed */}
//           <button onClick={handleAction} className="btn">
//             Fetch Random User
//           </button>
//         </div>
//       )}
//       <Toaster />
//     </div>
//   );
// };

// export default App;

// import React from 'react';
// import { toast,Toaster } from 'react-hot-toast';
// const showToast = () => {
//   toast.success('Successfully logged in',{
//     position:"top-left"
//   });
//   toast.success('Successfully logged in',{
//     position:"top-center"
//   });
//   toast.success('Successfully logged in',{
//     position:"top-right"
//   });
//   toast.success('Successfully logged in',{
//     position:"bottom-left"
//   });
//   toast.success('Successfully logged in',{
//     position:"bottom-center"
//   });
//   toast.success('Successfully logged in',{
//     position:"bottom-right"
//   });

// }

// const App = () => {
//   return (
//     <div>
//       <button className='btn' onClick={showToast}>Basic toast message</button>
//       <Toaster />
//     </div>
//   );
// };
// export default App

// import { toast, Toaster } from "react-hot-toast";
// import React from "react";

// const App = () => {
//   const toastId = React.useRef(null);
//   const toastNotification = () =>
//     (toastId.current = toast("Show toast notification"));
//   const dismiss = () => toast.dismiss(toastId.current);
//   const dismissAll = () => toast.dismiss();
//   return (
//     <div className="App">
//       <div className="btn-header">
//         <button className="btn" onClick={toastNotification}>
//           Show toast
//         </button>
//         <button className="btn" onClick={dismiss}>
//           Dismiss
//         </button>
//         <button className="btn" onClick={dismissAll}>
//           Dismiss All
//         </button>
//       </div>

//       <Toaster />
//     </div>
//   );
// };

// export default App;import React, { useState } from "react";

// import React, { useState } from "react";
// import { Toaster, toast } from "react-hot-toast";

// const App = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     toast.promise(
//       new Promise((resolve, reject) => {
//         setTimeout(() => {
//           if (
//             formData.username === "user" &&
//             formData.password === "openreplay"
//           ) {
//             resolve("Login successful!");
//           } else {
//             reject(new Error("user dos not exist"));
//           }
//         }, 2000); // Simulating a 2-second delay
//       }),
//       {
//         loading: "Logging in...",
//         success: (message) => message,
//         error: (error) => error.message,
//       }
//     );
//   };

//   return (
//     <div className="App">
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password:</label>
//           <input
//           className="password"
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//       <Toaster />
//     </div>
//   );
// };

// export default App;

// import React from "react";
// import { Toaster, toast } from "react-hot-toast";

// const App = () => {
//   const handleMouseEnter = () => {
//     toast.success("You hovered over the toast!");
//   };

//   const handleMouseLeave = () => {
//     toast.dismiss();
//   };

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div className="bg-white p-8 rounded-lg shadow-lg">
//         <button
//           className="bg-blue-500 text-white hover:bg-red py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//           Show Toast with Hover Interaction
//         </button>
//       </div>
//       <Toaster />
//     </div>
//   );
// };

// export default App;

// import React, { useState } from "react";
// import { Toaster, toast } from "react-hot-toast";

// const FileUploadApp = () => {
//   const [uploading, setUploading] = useState(false);

//   const handleHover = () => {
//     toast.success("You can start the upload!", {
//       duration: 2000,
//     });
//   };

//   const handleFileUpload = () => {
//     setUploading(true);
//     // Simulate the file upload process
//     setTimeout(() => {
//       setUploading(false);
//       toast.success("File upload successful!");
//     }, 3000);

//     // Simulate an error during the file upload process
//     // Uncomment the code below to simulate an error
//     // setTimeout(() => {
//     //   setUploading(false);
//     //   toast.error("File upload failed. Please try again.");
//     // }, 3000);
//   };

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div className="bg-white p-8 rounded-lg shadow-lg">
//         <button
//           className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 mr-2"
//           onMouseEnter={handleHover}
//           onMouseLeave={toast.dismiss}
//           onClick={handleFileUpload}
//         >
//           {uploading ? "Uploading..." : "Upload"}
//         </button>
//       </div>
//       <Toaster position="bottom-center" />
//     </div>
//   );
// };

// export default FileUploadApp;

// import React from "react";
// import { Toaster, toast } from "react-hot-toast";

// const ImageGalleryApp = () => {
//   const cars = [
//     {
//       id: 1,
//       title: "Car gallery",
//       Dealer: "Audi",
//       description: "Audi e tron",
//       url: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=431&q=80",
//     },
//     {
//       id: 2,
//       title: "Car gallery",
//       Dealer: "Hyundai",
//       description: "The HYUNDAI SONATA",
//       url: "https://images.unsplash.com/photo-1681276159290-29989388a728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80",
//     },
//     {
//       id: 3,
//       title: "Car gallery",
//       Dealer: "Mercedes Benz",
//       description: "e-class",
//       url: "https://images.unsplash.com/photo-1616789916189-3a0d215b6122?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
//     },
//   ];

//   const handleHover = (car) => {
//     toast.success(
//       <div className="image-details">
//         <h3 className="image-title">{car.title}</h3>
//         <p className="image-author">{car.Dealer}</p>
//         <p className="image-description">{car.description}</p>
//       </div>,
//       {
//         duration: 2500,
//         style: {
//           background: "rgba(0, 0, 0, 0.8)",
//         },
//       }
//     );
//   };

//   return (
//     <div className="image-gallery">
//       {cars.map((car) => (
//         <div
//           key={car.id}
//           className="image-card"
//           onMouseEnter={() => handleHover(car)}
//           onMouseLeave={toast.dismiss}
//         >
//           <img src={car.url} alt={car.title} className="image" />
//           <div className="image-overlay">
//             <p className="text-white">Hover to view details</p>
//           </div>
//         </div>
//       ))}
//       <Toaster />
//     </div>
//   );
// };

// export default ImageGalleryApp;

// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { decrement, increment, incrementByAmount } from './redux/counter';

// const App = () => {
//   const { count } = useSelector((state) => state.counter);
//   const dispatch = useDispatch();

//   return (
//     <div className="bg-gray-100 h-screen flex flex-col justify-center items-center">
//       <h1 className="text-4xl font-bold mb-4">The count is: {count}</h1>
//       <div className="space-x-4">
//         <button
//           className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
//           onClick={() => dispatch(increment())}
//         >
//           Increment
//         </button>
//         <button
//           className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
//           onClick={() => dispatch(decrement())}
//         >
//           Decrement
//         </button>
//         <button
//           className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
//           onClick={() => dispatch(incrementByAmount(33))}
//         >
//           Increment by 33
//         </button>

//       </div>

//     </div>
//   );
// };

// export default App;

// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addUser, deleteUser, updateUsername } from "./redux/Users";

// const App = () => {
//   const [name, setName] = useState("");
//   const [username, setUsername] = useState("");
//   const [newUsername, setNewUsername] = useState("");
//   const dispatch = useDispatch();
//   const listUsers = useSelector((state) => state.users.value);

//   return (
//     <div className="bg-gray-100 min-h-screen p-4">
//       <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow">
//         <div className="mb-4">
//           <input
//             className="w-full px-4 py-2 border rounded"
//             type="text"
//             placeholder="Name..."
//             value={name}
//             onChange={(e) => {
//               setName(e.target.value);
//             }}
//           />
//         </div>
//         <div className="mb-4">
//           <input
//             className="w-full px-4 py-2 border rounded"
//             type="text"
//             placeholder="Username..."
//             value={username}
//             onChange={(e) => {
//               setUsername(e.target.value);
//             }}
//           />
//         </div>
//         <button
//           className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
//           onClick={() => {
//             dispatch(
//               addUser({
//                 id: listUsers.length > 0 ? listUsers[listUsers.length - 1].id + 1 : 0,
//                 name,
//                 username,
//               })
//             );
//           }}
//         >
//           Add User
//         </button>
//       </div>
//       <div className="mt-4">
//         {listUsers.map((user) => {
//           return (
//             <div
//               key={user.id}
//               className="bg-white p-6 rounded-lg shadow mb-4 flex justify-between items-center"
//             >
//               <div>
//                 <h1 className="text-xl font-bold">{user.name}</h1>
//                 <p className="text-gray-600">@{user.username}</p>
//               </div>
//               <div>
//                 <input
//                   className="w-40 px-4 py-2 border rounded mr-2"
//                   type="text"
//                   placeholder="New Username..."
//                   onChange={(e) => {
//                     setNewUsername(e.target.value);
//                   }}
//                 />
//                 <button
//                   className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mr-2"
//                   onClick={() => {
//                     dispatch(updateUsername({ id: user.id, username: newUsername }));
//                     setNewUsername(""); // Clear the input field after updating
//                   }}
//                 >
//                   Update
//                 </button>
//                 <button
//                   className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
//                   onClick={() => {
//                     dispatch(deleteUser({ id: user.id }));
//                   }}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default App;


import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser, updateUsername } from "./redux/Users";

const App = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const dispatch = useDispatch();
  const listUsers = useSelector((state) => state.users.value);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Add User</h1>
        <div className="mb-4">
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
            type="text"
            placeholder="Name..."
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="mb-4">
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
            type="text"
            placeholder="Username..."
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <button
          className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none"
          onClick={() => {
            dispatch(
              addUser({
                id: listUsers.length > 0 ? listUsers[listUsers.length - 1].id + 1 : 0,
                name,
                username,
              })
            );
            setName("");
            setUsername("");
          }}
        >
          Add User
        </button>
      </div>
      <div className="mt-4">
        {listUsers.map((user) => {
          return (
            <div
              key={user.id}
              className="bg-white p-6 rounded-lg shadow-lg mb-4 flex justify-between items-center"
            >
              <div>
                <h1 className="text-xl font-bold">{user.name}</h1>
                <p className="text-gray-600">@{user.username}</p>
              </div>
              <div>
                <input
                  className="w-40 px-4 py-2 border border-gray-300 rounded mr-2 focus:outline-none focus:ring focus:border-green-500"
                  type="text"
                  placeholder="New Username..."
                  onChange={(e) => {
                    setNewUsername(e.target.value);
                  }}
                />
                <button
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mr-2 focus:outline-none"
                  onClick={() => {
                    dispatch(updateUsername({ id: user.id, username: newUsername }));
                    setNewUsername(""); // Clear the input field after updating
                  }}
                >
                  Update
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded focus:outline-none"
                  onClick={() => {
                    dispatch(deleteUser({ id: user.id }));
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
