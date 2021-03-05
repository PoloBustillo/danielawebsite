import React, { useState } from "react";
import PropTypes from "prop-types";
import { isMobile } from "react-device-detect";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Jump from "react-reveal/Jump";
import SkyLight from "react-skylight";
const SubMenuServices = (props) => {
  const [selected, setSelected] = useState("todos");
  const [animated, setAnimated] = useState();
  return !isMobile ? (
    <Jump top cascade ssrFadeout>
      <div className="subMenuServicios">
        <div
          onClick={() => {
            props.setFilter("");
            setSelected("todos");
          }}
          className={`headerAnimation subMenu all ${
            selected == "todos" ? "active" : ""
          }`}
        >
          Todos
        </div>
        {props.areas.map((terapia, index) => {
          return (
            <div
              onClick={() => {
                props.setFilter(terapia);
                setSelected(terapia);
              }}
              key={terapia.id}
              className={`headerAnimation subMenu ${
                selected == terapia ? "active" : ""
              }`}
            >
              {terapia}
            </div>
          );
        })}

        <style jsx>{`
          .subMenuServicios {
            display: flex;
            justify-content: center;
            text-align: center;
            max-width: 95vw;
            border-radius: 60px;
            box-shadow: 0 5px 25px 0 rgba(151, 158, 185, 0.25);
            background-color: #fff;
          }
          .subMenu {
            margin: 14px;
            padding: 14px;
          }

          .active {
            background-color: rgba(29, 181, 120, 0.8);
            color: white;
            padding: 14px;
            border-radius: 60px;
          }
        `}</style>
      </div>
    </Jump>
  ) : (
    <Jump top cascade ssrFadeout>
      <div className="subMenuServicios">
        <div
          onClick={() => {
            props.setFilter("");
            setSelected("todos");
          }}
          className={`headerAnimation subMenu all ${
            selected == "todos" ? "active" : ""
          }`}
        >
          Todos
        </div>
        <div
          onClick={() => {
            animated.show();
          }}
          className={`headerAnimation subMenu ${
            selected !== "todos" ? "active" : ""
          }`}
        >
          {selected === "todos" || selected === "Filtrar"
            ? "Filtrar"
            : selected}{" "}
          <FontAwesomeIcon fixedWidth size="1x" icon={faSortDown} />
        </div>
        <SkyLight
          closeButtonStyle={{ zIndex: "1800", fontSize: "2em", color: "white" }}
          dialogStyles={{
            width: "50%",
            height: `${10 * props.areas.length}vh`,
            minHeight: "10vh",
            position: "fixed",
            top: "50%",
            left: "50%",
            marginTop: "-200px",
            marginLeft: "-25%",
            backgroundColor: "rgba(0,0,0,.5)",
            borderRadius: "2px",
            zIndex: 1600,
            padding: "15px",
            boxShadow: "0 0 4px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.28)",
          }}
          overlayStyles={{
            zIndex: "1500",
            backgroundColor: "rgba(255, 255, 255, .7)",
          }}
          hideOnOverlayClicked
          afterClose={() => {
            if (selected == "Filtrar") {
              setSelected("todos");
            }
          }}
          ref={(ref) => setAnimated(ref)}
        >
          <ListGroup variant="flush">
            {props.areas.map((terapia, index) => {
              return (
                <ListGroup.Item
                  className="drop-item"
                  style={{
                    color: "white",
                    cursor: "pointer",
                    marginTop: "1vh",
                    backgroundColor: "rgba(255, 255, 255, 0)",
                  }}
                  onClick={() => {
                    props.setFilter(terapia);
                    setSelected(terapia);
                    animated.hide();
                  }}
                  key={terapia.id}
                >
                  {terapia}
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </SkyLight>
        <style jsx>{`
          .subMenuServicios {
            display: flex;
            justify-content: center;
            text-align: center;
            max-width: 95vw;
            border-radius: 60px;
            box-shadow: 0 5px 25px 0 rgba(151, 158, 185, 0.25);
            background-color: #fff;
          }

          .subMenu {
            margin: 14px;
            padding: 14px;
            cursor: pointer;
          }
          .active {
            background-color: rgba(29, 181, 120, 0.8);
            color: white;
            padding: 14px;
            border-radius: 60px;
          }
        `}</style>
      </div>
    </Jump>
  );
};

SubMenuServices.propTypes = {};

export default SubMenuServices;
