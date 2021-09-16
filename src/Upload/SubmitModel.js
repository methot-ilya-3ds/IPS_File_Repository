import React, { useState, useContext } from "react";
import background from "../Images/Background.png";
import "../CSS/Upload.css";
import { ModelUpload } from "./FormComponents/MainComponents/MainComponents";
import { SurroundingsUpload } from "./FormComponents/MainComponents/MainComponents";
import { ModelContext } from "../Models/ModelContext";
import LoadingGif from "../Images/loading.gif";

const Form = () => {
  // Initial empty state for the form.
  const initialState = {
    ShowContent: false,
    ShowModelUpload: false,
    ShowSurroundings: false,
  };

  // Sets our initial state v
  const [{ ShowModelUpload, ShowSurroundings, ShowContent }, setState] =
    useState(initialState);

  const [ShowNotification, setNotification] = useState(false);
  const [ShowLoading, setLoading] = useState(false);
  const [ResponseText, setResponseText] = useState("");

  const ToggleResponse = () => {
    setNotification((ShowNotification) => !ShowNotification);
  };

  const ToggleLoading = () => {
    setLoading((ShowLoading) => !ShowLoading);
  };

  const { Name, Owner, Industry, File } = useContext(ModelContext);

  var formData = new FormData();

  const submit = (e) => {
    e.preventDefault();
    formData.append("model", File);
    formData.append("title", Name);
    formData.append("owner", Owner);
    formData.append("industry", Industry);
    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    try {
      fetch("http://localhost:3000/post", {
        method: "POST",
        body: formData,
        enctype: "multipart/form-data",
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else if (res.status === 404) {
            setResponseText("404: Link not found");
            ToggleLoading();
            ToggleResponse();
          } else {
            setResponseText("Unable to upload. Please attach a valid .glb file");
            ToggleLoading();
            ToggleResponse();
          }
        })
        .then((res) => {
          console.log(res);
          try {
            if (res.message) {
              console.log(res.message);
              const responseText = res.message;
              setResponseText(responseText);
              ToggleLoading();
              ToggleResponse();
            }
            else{
              setResponseText("Successfully uploaded model!");
              ToggleLoading();
              ToggleResponse();
            }
          } catch (e) {}
        })
        .catch((error) => {
          setResponseText("unable to connect to server");
          ToggleLoading();
          ToggleResponse();
          return Promise.reject();
        });
    } catch (e) {
      setResponseText(e);
      ToggleLoading();
      ToggleResponse();
    }

    // axios
    //   .post("https://env28test.ag.3ds.com/", JSON.stringify({}))
    //   .then((Response) => console.log(Response.data.id));
  };

  // Switches form display
  function changeFormType(event) {
    switch (event.target.value) {
      case "3DModels":
        setState(initialState);
        setState({ ShowModelUpload: true, ShowContent: true });
        break;
      case "Surroundings":
        setState(initialState);
        setState({ ShowSurroundings: true, ShowContent: true });
        break;
      default:
        return;
    }
  }

  const Notification = () => (
    <div className="notification">
      <div className="notification-container">
        <p>{ResponseText}</p>
        <input
          id="OKButton"
          type="button"
          onClick={ToggleResponse}
          value="OK"
        ></input>
      </div>
    </div>
  );

  const Loading = () => (
    <div className="loading">
      <div className="loading-container">
        <img
          alt="loading gif"
          src={LoadingGif}
          style={{ width: "100%", height: "auto" }}
        ></img>
      </div>
    </div>
  );

  return (
    <>
      <div id="Form-Container">
        <form
          id="Form"
          className="form style-scope my-app-models"
          enctype="multipart/form-data"
          action=""
          onSubmit={(e) => {
            submit(e);
            ToggleLoading();
          }}
          noValidate
        >
          <h1> File Upload Panel</h1>
          <div className="Form-Column">
            <label className="Form-Row ">Choose Upload Type</label>
            <select
              id="Upload-Type-Submit"
              className="Form-Row"
              onChange={changeFormType}
              defaultValue={""}
            >
              <option disabled value="">
                {" "}
                -- select an option --{" "}
              </option>
              <option value="3DModels">3DModels</option>
              <option value="Surroundings">Surroundings</option>
              <option value="Music">Music</option>
              <option value="Images">Images</option>
              <option value="Videos">Videos</option>
            </select>
          </div>
          {ShowModelUpload && <ModelUpload />}
          {ShowSurroundings && <SurroundingsUpload />}
          <div class="Form-Row Centered">
            {ShowContent && (
              <input class="Centered" type="submit" value="Submit" />
            )}
          </div>
        </form>
        {ShowNotification ? <Notification /> : null}
        {ShowLoading ? <Loading /> : null}
      </div>
    </>
  );
};

export default Form;
