import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addApplication } from "../Redux/applicationSlice.jsx";

const ApplicationPage = () => {
  const navigate = useNavigate();
  const {
    register,
    setValue,
    getValues,
    trigger,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm();

  const [step, setStep] = useState(1);
  const [skills, setSkills] = useState([]);

  const { jobID } = useParams();
  const dispatch = useDispatch();
  const applicationsList = useSelector(
    (state) => state.applications.applicationsList
  );

  const onSubmit = (data) => {
    const applicationData = {
      "jobID": jobID,
      "name": data.name,
      "yoe": data.yoe,
      "skills": [...skills],
      "coverLetter": data.coverLetter,
      "startDate": data.startDate,
      "phoneNo": data.phoneNo,
      "email": data.email
    };

    dispatch(addApplication(applicationData));
    navigate(`/applications/${jobID}`)
  };

  let currentApplication = null;
  for (let i = 0; i < applicationsList.length; i++) {
    if (jobID === applicationsList[i]?.jobID) {
      currentApplication = applicationsList[i];
      break;
    }
  }

  useEffect(() => {
    if (currentApplication) {
      Object.entries(currentApplication).forEach(([key, value]) => {
        setValue(key, value);
      });
      setSkills(currentApplication.skills);
      setStep(1);
    }
  }, []);

  const handleNext = async () => {
    let valid = false;

    if (step === 1) {
      valid = await trigger(["name", "email", "phoneNo"]);
    } else if (step === 2) {
      valid =
        (await trigger(["yoe"])) &&
        ((await trigger(["inputSkill"])) || (skills.length !== 0));
    }
    if (valid) { setStep(step + 1) };
  };
  const handleBack = () => setStep((prev) => prev - 1);

  const handleAddSkill = async (e) => {
    const isValid = await trigger("inputSkill");
    if (!isValid) return;

    const value = getValues("inputSkill");
    setSkills([...skills, value.trim()]);
    setValue("inputSkill", "");
  };

  const handleRemoveSkill = (skillIdx) => {
    const updatedSkills = skills.filter((_, index) => index !== skillIdx);
    setSkills(updatedSkills);
  };

  return (
    <div style={{ padding: "10px" }}>
      <h1>Application Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {step === 1 && (
          <>
            <h2
              style={{
                backgroundColor: "green",
                padding: "5px",
                textAlign: "center",
              }}
            >
              Step 1
            </h2>
            <label>Name: </label>
            <input
              style={{
                border: errors.name ? "2px solid red" : "2px solid blue",
              }}
              type="text"
              {...register("name", {
                required: "Name is required !",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters",
                },
              })}
            />
            <br />
            {errors.name && (
              <span style={{ marginLeft: "50px", color: "red" }}>
                {errors.name.message}
              </span>
            )}
            <br />
            <br />
            <label>Email: </label>
            <input
              style={{
                border: errors.email ? "2px solid red" : "2px solid blue",
              }}
              type="email"
              {...register("email", {
                required: "Email is required !",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Email format must be valid",
                },
              })}
            />
            <br />
            {errors.email && (
              <span style={{ marginLeft: "50px", color: "red" }}>
                {errors.email.message}
              </span>
            )}

            <br />
            <br />
            <label>Phone Number: </label>
            <input
              style={{
                border: errors.phoneNo ? "2px solid red" : "2px solid blue",
              }}
              type="number"
              {...register("phoneNo", {
                required: "Phone Number is required !",
                pattern: {
                  value: /^[6-9]\d{9}$/,
                  message: "Phone Number format must be valid",
                },
              })}
            />
            <br />
            {errors.phoneNo && (
              <span style={{ marginLeft: "105px", color: "red" }}>
                {errors.phoneNo.message}
              </span>
            )}

            <button type="button" onClick={() => handleNext()}>
              Next
            </button>

          </>
        )}

        {step === 2 && (
          <>
            <h2
              style={{
                backgroundColor: "green",
                padding: "5px",
                textAlign: "center",
              }}
            >
              Step 2
            </h2>
            <label>Years of Experience: </label>
            <input
              style={{
                border: errors.yoe ? "2px solid red" : "2px solid blue",
                padding: "5px",
              }}
              type="number"
              {...register("yoe", {
                required: "Years of Experience is required !",
                min: {
                  value: 0,
                  message: "Number must be positive!",
                },
              })}
              placeholder="Year(s) of experience"
            />
            <br />
            {errors.yoe && (
              <>
                {" "}
                <span style={{ color: "red", marginLeft: "140px" }}>
                  {errors.yoe.message}
                </span>{" "}
                <br />
              </>
            )}
            <br />
            <div>
              <p style={{ margin: "0" }}>Skills:</p>
              <div
                style={{
                  border: skills.size > 0 ? "1px solid green" : "",
                  width: "300px",
                }}
              >
                {skills.map((item, index) => (
                  <span
                    key={index}
                    style={{
                      backgroundColor: "green",
                      padding: "4px 8px",
                      borderRadius: "5px",
                      display: "inline-block",
                      margin: "15px 10px 0px 0px",
                      position: "relative",
                    }}
                  >
                    {item}

                    <button
                      type="button"
                      style={{
                        borderRadius: "50%",
                        padding: "0px 2px",
                        width: "22px",
                        color: "white",
                        backgroundColor: "red",
                        position: "absolute",
                        top: "-13px",
                        right: "-10px",
                      }}
                      onClick={() => handleRemoveSkill(index)}
                    >
                      &#10006;
                    </button>
                  </span>
                ))}
              </div>
            </div>

            <input
              style={{
                padding: "5px",
                marginTop: skills.length > 0 ? "15px" : "",
                border: errors.inputSkill ? "1px solid red" : "1px solid gray",
              }}
              type="text"
              placeholder="Enter a skill"
              {...register("inputSkill", {
                required: "Skill cannot be empty!",
              })}
            />
            <button
              type="button"
              style={{ marginLeft: "10px" }}
              onClick={(e) => handleAddSkill(e)}
            >
              Add Skill
            </button>
            <br />
            {errors.inputSkill && (
              <>
                <span style={{ color: "red" }}>
                  {errors.inputSkill.message}
                </span>
              </>
            )}
            <button
              style={{ marginRight: "10px" }}
              type="button"
              onClick={() => handleBack()}
            >
              Back
            </button>
            <button type="button" onClick={() => handleNext()}>
              Next
            </button>
          </>
        )}

        {step === 3 && (
          <>
            <h2
              style={{
                backgroundColor: "green",
                padding: "5px",
                textAlign: "center",
              }}
            >
              Step 3
            </h2>
            <label
              style={{
                fontWeight: "bold",
                display: "inline-block",
                marginBottom: "10px",
              }}
            >
              Cover Letter:
            </label>
            <br />
            <textarea
              placeholder="Write a cover letter..."
              {...register("coverLetter", {
                required: "Cover letter is required!",
              })}
              style={{ width: "300px", height: "100px" }}
            />
            {errors.coverLetter && touchedFields.coverLetter && (
              <>
                <br />{" "}
                <span style={{ color: "red" }}>
                  {errors.coverLetter.message}
                </span>
              </>
            )}
            <br />
            <br />
            <label>Start Date:</label> <br />
            <input
              style={{ padding: "5px", marginBottom: "20px" }}
              type="date"
              {...register("startDate", {
                required: "Start date is required!",
                min: {
                  value: new Date().toISOString().split("T")[0],
                  message: "Start date must be today or in the future!",
                },
              })}
            /> <br />
            {errors.startDate && touchedFields.startDate && (
              <>
                <br />{" "}
                <span style={{ color: "red" }}>{errors.startDate.message}</span>
              </>
            )}
            <button
              style={{ marginRight: "10px" }}
              type="button"
              onClick={() => handleBack()}
            >
              Back
            </button>
            <button type="submit">Submit</button>
          </>
        )}
      </form>
    </div>
  );
};

export default ApplicationPage;
