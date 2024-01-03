/*global chrome*/
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button/Button";
import "../assets/css/Loading.css";
import LoadingView from "./Loading";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import ExpenseAdder from "../components/ExpenseAdder";
import FileUploader from "../components/FileUploader";

import Lottie from "lottie-react";
import moneyWallet from "../assets/img/money_wallet.json";
import moneyJar from "../assets/img/moneyjar_bg.png";

export function InitialView(props: any) {
  const [inputType, setInputType] = useState(0);

  return (
    <>
      {inputType === 0 ? (
        <>
          <Box
            sx={{
              paddingTop: "1px",
              width: "100%",
              alignContent: "center",
              margin: "auto", // Center the box
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Stack spacing={2}>
              <Stack>
                <Typography
                  style={{
                    fontFamily: "Nunito",
                    color: "#3D1766",
                    fontWeight: "bolder",
                    fontSize: "30px",
                  }}
                >
                  kharcha
                </Typography>
                <Typography
                  style={{
                    fontFamily: "Nunito",
                    color: "#3D1766",
                    fontWeight: "bolder",
                    fontSize: "20ppx",
                  }}
                >
                  save smart
                </Typography>
              </Stack>
              {/* <Lottie
                animationData={moneyWallet}
                loop
                autoplay
                style={{ width: "300px", height: "300px" }}
              /> */}
              <img
                src={moneyJar}
                alt="My Animation"
                style={{ width: "328px", height: "243px" }}
              />

              <Stack spacing={2} direction={"row"}>
                <Button
                  size="large"
                  variant="contained"
                  style={{
                    fontFamily: "Nunito",
                    marginBottom: "20px",
                    backgroundColor: "#E3ACF9",
                    color: "#3D1766",
                  }}
                  onClick={() => setInputType(1)}
                >
                  File Upload
                </Button>

                <Button
                  size="large"
                  variant="contained"
                  style={{
                    fontFamily: "Nunito",
                    marginBottom: "20px",
                    backgroundColor: "#E3ACF9",
                    color: "#3D1766",
                  }}
                  onClick={() => setInputType(2)}
                >
                  Add Expense
                </Button>
              </Stack>
            </Stack>
          </Box>
        </>
      ) : inputType === 1 ? (
        <FileUploader />
      ) : (
        <ExpenseAdder />
      )}
    </>
  );
}
