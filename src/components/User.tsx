// pages/index.tsx
// import { useDispatch, useSelector } from 'react-redux';
// import { setUser, clearUser } from '../redux/features/userSlice';
// import { RootState } from '../redux/strore';

// export default function User() {
//   const dispatch = useDispatch();
//   const user = useSelector((state: RootState) => state.user.user);
//   // dispatch(setUser({ id: 1, name: 'Ahmed Abou Khatwa', email: 'ahmed@aboukhatwa.com' }));
//   // console.log(user);
//   const handleSetUser = () => {
//     dispatch(setUser({ id: 1, name: 'Ahmed Abou Khatwa', email: 'ahmed@aboukhatwa.com' }));
//   };

//   const handleClearUser = () => {
//     dispatch(clearUser());
//   };

//   return (
//     <div>
//       <h1>User Information</h1>
//       {user ? (
//         <div>
//           <p>ID: {user.id}</p>
//           <p>Name: {user.name}</p>
//           <p>Email: {user.email}</p>
//           <button onClick={handleClearUser}>Clear User</button>
//         </div>
//       ) : (
//         <div>
//           <p>No user information available.</p>
//           <button onClick={handleSetUser}>Set User</button>
//         </div>
//       )}
//     </div>
//   );
// }
