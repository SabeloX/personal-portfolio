import { Box, Button, Container, FormControlLabel, FormGroup, IconButton, Radio, RadioGroup, Snackbar, TextField, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { ComponentShell } from "../component-shell";
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MailIcon from '@mui/icons-material/Mail';
import axios from "axios";

export interface ContactProps {
    contact: string;
    email: string;
}

type StateVariable = {
    value: string;
    error: boolean;
}

export const Contact = ({ contact, email }: ContactProps) => {
    const [name, setName] = useState<StateVariable>({ value: "", error: false });
    const [emailAddress, setEmail] = useState<StateVariable>({ value: "", error: false });
    const [message, setMessage] = useState<StateVariable>({ value: "", error: false });
    const [subject, setSubject] = useState<StateVariable>({ value: "", error: false });
    const [open, setOpen] = useState<boolean>(false);
    const [feeback, setFeedback] = useState<{ value: string; error: boolean }>({ value: "Email sent. I will chat with you soon!", error: false });

    return (
        <section className="section" id="contact">
            <div className="container text-center">
                <p className="section-subtitle">How can you communicate?</p>
                <h6 className="section-title mb-5">Contact Me</h6>
                <form onSubmit={(e) => e.preventDefault()} action="" className="contact-form col-md-10 col-lg-8 m-auto">
                    <div className="form-row">
                        <div className="form-group col-sm-6">
                            <input
                                type="text"
                                size={50}
                                className="form-control"
                                placeholder="Your Name"
                                required
                                onChange={(event: ChangeEvent<HTMLInputElement>) => setName({ value: event.target.value, error: false })}
                                value={name.value}
                            />
                        </div>
                        <div className="form-group col-sm-6">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter Email"
                                value={emailAddress.value}
                                required
                                onChange={(event: ChangeEvent<HTMLInputElement>) => setEmail({ value: event.target.value, error: false })}
                            />
                        </div>
                        <div className="form-group col-sm-12">
                            <textarea
                                name="comment"
                                id="comment"
                                rows={6}
                                className="form-control"
                                placeholder="Write Something"
                                value={message.value}
                                required
                                onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setMessage({ value: event.target.value, error: false })}
                            ></textarea>
                        </div>
                        <FormGroup
                            sx={{
                                width: "100%",
                                paddingLeft: "5px",
                                paddingRight: "5px"
                            }}
                        >
                            <RadioGroup
                                sx={{
                                    flexDirection: { md: "row", xs: "column" },
                                    justifyContent: "center" ,
                                    gap: { md: "20px", sm: "10px" },
                                    color: "#212529",
                                    "& .MuiButtonBase-root": {
                                        color: "#212529",
                                    },
                                    width: "100%"
                                }}
                                value={subject.value}
                                onChange={(event, value) => setSubject({ value, error: false })}
                            >
                                {
                                    ["Request a service", "Enquire about me", "Just saying hi!"].map((item, index) => (
                                        <FormControlLabel
                                            key={index}
                                            labelPlacement="end"
                                            value={item}
                                            control={<Radio />}
                                            label={item}
                                            sx={{
                                                ".MuiTypography-root": {
                                                    fontFamily: "'Patrick Hand', cursive",
                                                    color: "#212529",
                                                }
                                            }}
                                        />
                                    ))
                                }
                            </RadioGroup>
                            {subject.error &&
                                <Typography
                                    sx={{
                                        color: "red",
                                        fontSize: "12px"
                                    }}
                                    className="text"
                                >
                                    Please specify the reason.
                                </Typography>
                            }
                        </FormGroup>
                        <div className="form-group col-sm-12 mt-3">
                            <input
                                type="submit"
                                value="Send Message"
                                className="btn btn-outline-primary rounded"
                                onClick={() => {
                                    if (name.value === "" || emailAddress.value === "" || subject.value === "" || message.value === "") {
                                        if (name.value === "") {
                                            setName({ value: name.value, error: true })
                                        }
                                        if (emailAddress.value === "") {
                                            setEmail({ value: emailAddress.value, error: true })
                                        }
                                        if (subject.value === "") {
                                            setSubject({ value: subject.value, error: true })
                                        }
                                        if (message.value === "") {
                                            setMessage({ value: message.value, error: true })
                                        }
                                    }
                                    else {
                                        axios.post(
                                            "https://public.herotofu.com/v1/dcf54ab0-e864-11ed-b24a-93241516dd10",
                                            {
                                                name: name.value,
                                                email: emailAddress.value,
                                                subject: subject.value,
                                                message: message.value
                                            }).
                                            then(result => {
                                                setName({ value: "", error: false });
                                                setEmail({ value: "", error: false });
                                                setMessage({ value: "", error: false });
                                                setSubject({ value: "", error: false });
                                                setOpen(true);
                                            })
                                            .catch(error => {
                                                setFeedback({ value: "An error has occured. Please contact the email: sabelo.x.mtetwa@gmail.com", error: true });
                                                setOpen(true);
                                            })
                                    }
                                }}
                            />
                        </div>
                    </div>
                </form>
            </div>
            <Snackbar
                open={open}
                sx={{
                    background: "#1e549f",
                    padding: "20px",
                    borderRadius: "20px",
                }}
                autoHideDuration={2500}
                onClose={() => setOpen(false)}
            >
                <Typography
                    sx={{
                        color: feeback.error ? "red" : "white"
                    }}
                    className="text"
                >
                    {feeback.value}
                </Typography>
            </Snackbar>
        </section>
    )
}
    {/* return (
        <ComponentShell
            heading="Get in touch"
            textColor={textColor}
            subHeading="Do not hesitate to contact me about anything."
            id="contact"
        >
            <Container
                sx={{
                    padding: "0 !important",
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: { xs: "center" },
                    justifyContent: { md: "center" },
                    gap: "30px"
                }}
            >
                {
                    [
                        {
                            label: "Contact number",
                            value: contact,
                            icon: <PhoneIphoneIcon
                                sx={{ color: textColor }}
                                fontSize="large"
                            />
                        },
                        {
                            label: "Email address",
                            value: email,
                            icon: <MailIcon
                                sx={{ color: textColor }}
                                fontSize="large"
                            />
                        }
                    ].map((item, index) => (
                        <Box
                            key={index}
                            sx={{
                                maxWidth: "400px",
                                padding: "10px",
                                height: "150px",
                                backgroundColor: mainColor,
                                borderRadius: "20px",
                                display: "flex",
                                flexDirection: "column",
                                gap: "20px",
                                alignItems: "center",
                                justifyContent: "center",
                                border: `1px solid ${theme === "dark" ? "#fff" : "#000"}`,
                                boxShadow: `2px 2px 12px ${theme === "dark" ? "rgba(255,255,255,30%)" : "rgba(0,0,0,30%)"}`,
                            }}
                        >
                            <Container
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}
                            >
                                {item.icon}
                                <Typography
                                    className="heading"
                                    fontSize={26}
                                    sx={{
                                        color: textColor
                                    }}
                                >
                                    {item.label}
                                </Typography>
                            </Container>
                            <Typography
                                className="text"
                                fontSize={20}
                                sx={{
                                    color: textColor
                                }}
                            >
                                <a
                                    href={
                                        item.label === "Contact number" ?
                                            `tel:${item.value}` :
                                            `mail:${item.value}`
                                    }
                                >
                                    {item.value}
                                </a>
                            </Typography>
                        </Box>
                    ))
                }
            </Container>
            <Container
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "40px",
                    padding: "0 !important",
                    maxWidth: { md: "650px" }
                }}
            >
                <Typography
                    variant="h6"
                    sx={{
                        color: textColor
                    }}
                    className="heading"
                >
                    Send me a personal message
                </Typography>
                <TextField
                    variant="standard"
                    sx={{
                        color: `${textColor} !important`,
                        borderBottom: name.error ? "none" : `1px solid ${textColor}`,
                        "& .MuiFormLabel-root": {
                            color: `${textColor}`,
                            fontFamily: "'Patrick Hand', cursive",
                        },
                        "& .MuiInputBase-input": {
                            color: `${textColor}`,
                            fontFamily: "'Patrick Hand', cursive",
                        },
                        "& .MuiFormControl-root": {
                            borderBottom: "none",
                        },
                        "& .MuiInputBase-root:after": {
                            borderBottom: `1px solid ${textColor} !important`,
                        },
                        "& .MuiFormHelperText-root": {
                            color: "red",
                        },
                    }}
                    label="Name"
                    value={name.value}
                    helperText={name.error && "Please enter your name"}
                    error={name.error}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => setName({ value: event.target.value, error: false })}
                />
                <TextField
                    variant="standard"
                    sx={{
                        color: `${textColor} !important`,
                        borderBottom: emailAddress.error ? "none" : `1px solid ${textColor}`,
                        "& .MuiFormLabel-root": {
                            color: `${textColor}`,
                            fontFamily: "'Patrick Hand', cursive",
                        },
                        "& .MuiInputBase-input": {
                            color: `${textColor}`,
                            fontFamily: "'Patrick Hand', cursive",
                        },
                        "& .MuiInputBase-root:after": {
                            borderBottom: `1px solid ${textColor} !important`,
                        },
                        "& .MuiFormControl-root": {
                            border: "none",
                        },
                        "& .MuiFormHelperText-root": {
                            color: "red",
                        }
                    }}
                    label="Email"
                    value={emailAddress.value}
                    helperText={emailAddress.error && "Please enter your email address"}
                    type="email"
                    error={emailAddress.error}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => setEmail({ value: event.target.value, error: false })}
                />
                <TextField
                    multiline
                    rows={4}
                    variant="standard"
                    label="Message"
                    sx={{
                        color: `${textColor} !important`,
                        borderBottom: message.error ? "none" : `1px solid ${textColor}`,
                        "& .MuiFormLabel-root": {
                            color: `${textColor}`,
                            fontFamily: "'Patrick Hand', cursive",
                        },
                        "& .MuiInputBase-input": {
                            color: `${textColor}`,
                            fontFamily: "'Patrick Hand', cursive",
                        },
                        "& .MuiInputBase-root:after": {
                            borderBottom: `1px solid ${textColor} !important`,
                            color: `${textColor}`,
                        },
                        "& .MuiFormControl-root": {
                            border: "none",
                        },
                        "& .MuiFormHelperText-root": {
                            color: "red",
                        }
                    }}
                    error={message.error}
                    helperText={message.error && "Please enter your message"}
                    value={message.value}
                    onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setMessage({ value: event.target.value, error: false })}
                />
                <FormGroup>
                    <RadioGroup
                        sx={{
                            flexDirection: { md: "row", xs: "column" },
                            justifyContent: { md: "center" },
                            gap: "20px",
                            color: textColor,
                            "& .MuiButtonBase-root": {
                                color: textColor,
                            }
                        }}
                        onChange={(event, value) => setSubject({ value, error: false })}
                    >
                        {
                            ["Request a service", "Enquire about me", "Just saying hi!"].map((item, index) => (
                                <FormControlLabel
                                    key={index}
                                    labelPlacement="end"
                                    value={item}
                                    control={<Radio />}
                                    label={item}
                                    sx={{
                                        ".MuiTypography-root": {
                                            fontFamily: "'Patrick Hand', cursive"
                                        }
                                    }}

                                />
                            ))
                        }
                    </RadioGroup>
                    {subject.error &&
                        <Typography
                            sx={{
                                color: "red",
                                fontSize: "12px"
                            }}
                            className="text"
                        >
                            Please choose the reason.
                        </Typography>
                    }
                </FormGroup>
                <Container
                    sx={{
                        textAlign: "center"
                    }}
                >
                    <Button
                        sx={{
                            backgroundColor: `${mainColor} !important`,
                            width: "200px",
                            borderRadius: "15px",
                            height: "35px",
                            color: textColor,
                            boxShadow: `2px 2px 12px ${theme === "dark" ? "rgba(255,255,255,30%)" : "rgba(0,0,0,30%)"}`,
                            textTransform: "unset !important",
                            border: `1px solid ${theme === "dark" ? "#fff" : "#000"}`,
                            padding: "10px 0",
                            fontFamily: "'Patrick Hand', cursive"
                        }}
                        onClick={() => {
                            if (name.value === "" || emailAddress.value === "" || subject.value === "" || message.value === "") {
                                if (name.value === "") {
                                    setName({ value: name.value, error: true })
                                }
                                if (emailAddress.value === "") {
                                    setEmail({ value: emailAddress.value, error: true })
                                }
                                if (subject.value === "") {
                                    setSubject({ value: subject.value, error: true })
                                }
                                if (message.value === "") {
                                    setMessage({ value: message.value, error: true })
                                }
                            }
                            else {
                                axios.post(
                                    "https://public.herotofu.com/v1/dcf54ab0-e864-11ed-b24a-93241516dd10",
                                    {
                                        name: name.value,
                                        email: emailAddress.value,
                                        subject: subject.value,
                                        message: message.value
                                    }).
                                    then(result => {
                                        setName({ value: "", error: false });
                                        setEmail({ value: "", error: false });
                                        setMessage({ value: "", error: false });
                                        setSubject({ value: "", error: false });
                                        setOpen(true);
                                    })
                                    .catch(error => {
                                        setFeedback({ value: "An error has occured. Please contact the email: sabelo.x.mtetwa@gmail.com", error: true });
                                        setOpen(true);
                                    })
                            }
                        }}
                    >
                        Send
                    </Button>
                    <div
                        style={{
                            textIndent: "-99999px",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            position: "absolute"
                        }}
                        aria-hidden="true"
                    >
                        <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
                    </div>
                </Container>
            </Container>
            <Snackbar
                open={open}
                sx={{
                    backgroundColor: mainColor,
                    padding: "20px",
                    borderRadius: "20px",
                }}
                autoHideDuration={2000}
                onClose={() => setOpen(false)}
            >
                <Typography
                    sx={{
                        color: feeback.error ? "red" : "green"
                    }}
                    className="text"
                >
                    {feeback.value}
                </Typography>
            </Snackbar>
        </ComponentShell>
    )
} */}