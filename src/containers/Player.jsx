import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "../assets/styles/components/Player.scss";
import { getVideoSource } from "../actions";
import { Redirect } from "react-router-dom";

const Player = ({
  match: {
    params: { id }
  },
  playing,
  getVideoSource,
  history
}) => {
  const [loaging, setLoaging] = useState(true);

  const handleClick = () => {
    history.goBack();
  };

  const hasPlaying = Object.keys(playing).length > 0;

  useEffect(() => {
    getVideoSource(id);
    setLoaging(false);
    return () => {
      setLoaging(true);
    };
  }, []);

  if (loaging) return <div style={{ height: "100vh", width: "100vw" }} />;

  return hasPlaying ? (
    <div className="Player">
      <video controls autoPlay>
        <source src={playing.source} type="video/mp4" />
      </video>
      <div className="Player-back">
        <button type="button" onClick={handleClick}>
          Regresar
        </button>
      </div>
    </div>
  ) : (
    <Redirect to="/404/" />
  );
};

const mapStateToProps = state => {
  return {
    playing: state.playing
  };
};

const mapDispatchToProps = {
  getVideoSource
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
