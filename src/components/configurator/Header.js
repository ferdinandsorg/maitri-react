import React, { useState, useEffect } from "react";
import client from "../../sanityClient.js";
import { Routes, Route, Link } from "react-router-dom";

function ConfiguratorHeader({ motives, selectedMotive }) {
  // const [selectedMotive, setSelectedMotive] = useState(null);

  return (
    <header className="w-full h-auto flex flex-row justify-between items-start">
      {/* <div className="meta">
        <p className="font-bold">{motive.title}</p>
        <p>
          by <a href={"#" + motive.artist.slug.current}>{motive.artist.name}</a>
        </p>
      </div> */}
      {/* {selectedMotive && (
          <li>Selected motive: {selectedMotive}</li>
        )} */}
      <div className="meta">
        <Routes>
          {motives &&
            motives.map((motive) => (
              <Route
                key={motive.slug.current}
                path={`/motive/${motive.slug.current}`}
                element={<Meta motive={motive} />}
              />
            ))}
        </Routes>
      </div>
      <div>
        {motives &&
          motives.map((motive) => (
            <Link
              key={motive.slug.current}
              to={`/motive/${motive.slug.current}`}
              className="btn btn-primary">
              {motive.title}
            </Link>
          ))}
      </div>
    </header>
  );
}

function Meta({ motive }) {
  if (!motive) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <p className="font-bold">{motive.title}</p>
        <p>
          by <a href={"#" + motive.artist.slug.current}>{motive.artist.name}</a>
        </p>
      </>
    );
  }
}

// function ConfiguratorHeader({ motive }) {
//   // const [currentMotive, setCurrentMotive] = useState(null);
//   const [motive, setMotive] = useState({
//     title: "Motive Title",
//     artist: "#E4C1F9",
//     viewMode: "shirt",
//     artist: {
//       name: "Artist Name",
//       slug: "artist-name",
//     },
//   });
//   // const [motives, setMotives] = useState(null);
//   // useEffect(() => {
//   //   const query = `*[_type == "motive"] {
//   //         title,
//   //         slug,
//   //         image,
//   //         price,
//   //         artist->{name, slug}
//   //       }`;
//   //   client
//   //     .fetch(query)
//   //     .then((data) => setMotives(data))
//   //     .catch(console.error);
//   // }, []);

//   return (
//     <header className="w-full h-auto flex flex-row justify-between items-start">
//       <div className="meta">
//         <p className="font-bold">{motive.title}</p>
//         <p>
//           by <a href={"#" + motive.artist.slug.current}>{motive.artist.name}</a>
//         </p>
//       </div>
//       {/* <div className="flex flex-row gap-1 h-auto">
//         <BrowserRouter>
//           {motives &&
//             motives.map((motive, index) => (
//               <Link
//                 key={motive.slug.current}
//                 to={{
//                   pathname: `motive/${motive.slug.current}`,
//                   state: { submittedObject: motive.title },
//                 }}
//                 className="btn btn-primary">
//                 {motive.title} →
//               </Link>
//             ))}

//           <Routes>
//             {motives &&
//               motives.map((motive, index) => (
//                 <Route
//                   key={motive.slug.current}
//                   path={"/motive/" + motive.slug.current}
//                   element={
//                     <Motive
//                       selectedMotive={motive}
//                       onMotiveSelect={handleSelectMotive}
//                     />
//                   }
//                 />
//               ))}
//           </Routes>
//         </BrowserRouter>
//       </div> */}
//     </header>
//   );
// }

export default ConfiguratorHeader;
