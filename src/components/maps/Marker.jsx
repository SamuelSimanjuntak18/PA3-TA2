import { useState } from "react";

const Marker = ({ desa, jenis_bencana }) => {
  const [modal, setModal] = useState(false);

  const handleClick = () => {
    setModal(!modal);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-danger position-relative"
      style={{
        padding: "10px",
        borderRadius: "100%",
        width: "10px",
        height: "10px",
      }}
    >
      <span
        className="text-white fw-bold position-absolute"
        style={{ width: "30px" }}
      >
        {desa}
      </span>
      {modal && (
        <div
          className="position-absolute bg-white text-start"
          style={{ width: "250px", height: "initial", padding: "10px" }}
        >
          <img
            src="https://awsimages.detik.net.id/community/media/visual/2018/11/30/c668919c-a1e7-4f89-a06c-d9627861d5a3_169.jpeg?w=700&q=90"
            alt=""
            srcset=""
            className="w-100"
          />
          <p className="fw-bold m-0 mt-2" style={{ fontSize: "18px" }}>
            {desa}
          </p>
          <p className="fw-medium m-0" style={{ fontSize: "14px" }}>
            {jenis_bencana}
          </p>
          
        </div>
      )}
    </div>
  );
};

export default Marker;
