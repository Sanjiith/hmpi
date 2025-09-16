import React, { useState } from "react";
import { Card, Button, Form, Container, Row, Col } from "react-bootstrap";

function UploadData() {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleUpload = () => {
    if (!fileName) {
      alert("Please select a file first!");
      return;
    }
    console.log("Successful"); // ✅ print in console
  };

  return (
    <div className="content-wrapper">
      <Container
        fluid
        className="d-flex justify-content-center align-items-center min-vh-100"
      >
        <Row className="w-100 justify-content-center">
          <Col xs={12} sm={10} md={8} lg={6} xl={5}>
            <Card className="p-4 border bg-white shadow-sm">
              <h2 className="mb-4 text-center">Upload Your Dataset</h2>
              <Form>
                {/* Upload box */}
                <div
                  className="border d-flex flex-column align-items-center justify-content-center p-4 mb-3 bg-white text-center"
                  style={{ borderStyle: "dashed", borderRadius: "10px" }}
                >
                  <p className="text-muted mb-1">Select File to Upload</p>
                  <small className="text-muted mb-3">
                    Supported Format: CSV, XLSX (Max 10MB)
                  </small>

                  {/* Hidden file input */}
                  <Form.Control
                    type="file"
                    accept=".csv,.xlsx"
                    onChange={handleFileChange}
                    style={{ display: "none" }}
                    id="fileInput"
                  />

                  {/* Trigger button */}
                  <Button
                    variant="primary"
                    onClick={() =>
                      document.getElementById("fileInput").click()
                    }
                  >
                    Select File
                  </Button>

                  {fileName && (
                    <p className="mt-3 text-success text-center small">
                      Selected: <strong>{fileName}</strong>
                    </p>
                  )}
                </div>

                {/* Upload Button - Centered */}
                <div className="d-flex justify-content-center">
                  <Button variant="success" onClick={handleUpload}>
                    Upload & Analyze
                  </Button>
                </div>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default UploadData;
