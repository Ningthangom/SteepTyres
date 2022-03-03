import React from "react";
import "./Repair.css";

// icons
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  CCard,
  CRow,
  CCol,
  CCardBody,
  CCardTitle,
  CCardText,
  CCardImage,
  CListGroup,
  CListGroupItem,
} from "@coreui/react";

function MinorRepair() {
  return (
    <>
      <h1 className="repair"> Repairs(Call in for Quote) </h1>
      <div className="engine">
        <div className="row row-fluid">
          <div className="col-md-1"></div>
          <div className="col-md-4">
            <CCard
              className="mb-3"
              style={{ minWidth: "80vw", marginLeft: "2vw" }}
            >
              <CRow className="g-0">
                <CCol md={4}>
                  <CCardImage
                    style={{ height: "45vh" }}
                    src="https://mechanical-engineering.s3.amazonaws.com/monthly_2017_05/engine.jpg.97d4ed351d8a5f8df28fd9a2934baea0.jpg"
                  />
                </CCol>
                <CCol md={8}>
                  <CCardBody>
                    <CCardTitle>
                      <h1>Engine Work</h1>
                    </CCardTitle>
                    <CListGroup flush>
                      <CListGroupItem>
                        Car Cylinder Head Reconditioning
                      </CListGroupItem>
                      <CListGroupItem>Compression Tests</CListGroupItem>
                      <CListGroupItem>Vacuum Testing</CListGroupItem>
                      <CListGroupItem>Throtle Body Cleaning</CListGroupItem>
                      <CListGroupItem>
                        Manifold Gasket & Exhaust Repairs
                      </CListGroupItem>
                      <CListGroupItem>
                      Gas Analyser Checks
                      </CListGroupItem>
                      <CListGroupItem>
                      Timing Belt Replacement
                      </CListGroupItem>
                    </CListGroup>
                    {/* <CCardText>
                      <small className="text-medium-emphasis">
                        Last updated 3 mins ago
                      </small>
                    </CCardText> */}
                  </CCardBody>
                </CCol>
              </CRow>
            </CCard>
          </div>
        </div>
        <div className="row row-fluid">
          <div className="col-md-1"></div>
          <div className="col-md-4">
            <CCard
              className="mb-3"
              style={{ minWidth: "80vw", marginLeft: "2vw" }}
            >
              <CRow className="g-0">
                <CCol md={8}>
                  <CCardBody>
                    <CCardTitle>
                      <h1>Brake & Clutch Repairs</h1>
                    </CCardTitle>
                    <CListGroup flush>
                      <CListGroupItem>
                      Front And Rear Disc Brake Pad Replacement
                      </CListGroupItem>
                      <CListGroupItem>Brake Cylinder Replacement</CListGroupItem>
                      <CListGroupItem>Brake Master Cylinder Replacement Or Reconditioning</CListGroupItem>
                      <CListGroupItem>Brake Caliper Overhaul</CListGroupItem>
                      <CListGroupItem>
                      Brake Fluid Flushing ,Replacing
                      </CListGroupItem>
                      <CListGroupItem>
                      Brake Adjustment
                      </CListGroupItem>
                      <CListGroupItem>
                      Brake Pipe Replacement
                      </CListGroupItem>
                      <CListGroupItem>
                      Brake Shoe Replacement
                      </CListGroupItem>
                      <CListGroupItem>
                      Abs Module Replacement And Diagnosing
                      </CListGroupItem>
                    </CListGroup>
                  </CCardBody>
                </CCol>
                <CCol md={4}>
                  <CCardImage
                    style={{ height: "55vh" }}
                    src="https://www.wsautorepairs.com.au/wp-content/uploads/2015/06/Service-4.png"
                  />
                </CCol>
              </CRow>
            </CCard>
          </div>
        </div>
        <div className="row row-fluid">
          <div className="col-md-1"></div>
          <div className="col-md-4">
            <CCard
              className="mb-3"
              style={{ minWidth: "80vw", marginLeft: "2vw" }}
            >
              <CRow className="g-0">
                <CCol md={4}>
                  <CCardImage
                    style={{ height: "50vh" }}
                    src="https://images.squarespace-cdn.com/content/v1/55f61f21e4b02b9a7bdcc7fe/1551785081169-JJKC7E7LZS0PDGKFR53E/Cooling-System-1024x683.jpg"
                  />
                </CCol>
                <CCol md={8}>
                  <CCardBody>
                    <CCardTitle>
                      <h1>Cooling System & Overheating Repairs</h1>
                    </CCardTitle>
                    <CListGroup flush>
                      <CListGroupItem>
                      Fan & Drive Belt Replacment
                      </CListGroupItem>
                      <CListGroupItem>Thermofan Testing & Replacing</CListGroupItem>
                      <CListGroupItem>Cooling System Leakage Tests</CListGroupItem>
                      <CListGroupItem>Radiator Testing & Replacement</CListGroupItem>
                      <CListGroupItem>
                      Water Pump Replacement
                      </CListGroupItem>
                      <CListGroupItem>
                      Heater Hose & Heater Tap Replacing
                      </CListGroupItem>
                      <CListGroupItem>
                      Radiator Hose,Thermostat Replacing
                      </CListGroupItem>
                      <CListGroupItem>
                      Coolant Flush & Replacement
                      </CListGroupItem>
                    </CListGroup>
                    {/* <CCardText>
                      <small className="text-medium-emphasis">
                        Last updated 3 mins ago
                      </small>
                    </CCardText> */}
                  </CCardBody>
                </CCol>
              </CRow>
            </CCard>
          </div>
        </div>
        <div className="row row-fluid">
          <div className="col-md-1"></div>
          <div className="col-md-4">
            <CCard
              className="mb-3"
              style={{ minWidth: "80vw", marginLeft: "2vw" }}
            >
              <CRow className="g-0">
                <CCol md={8}>
                  <CCardBody>
                    <CCardTitle>
                      <h1>Suspension & Steering</h1>
                    </CCardTitle>
                    <CListGroup flush>
                      <CListGroupItem>
                      Suspension Checks
                      </CListGroupItem>
                      <CListGroupItem>Shock Absorber Replacement</CListGroupItem>
                      <CListGroupItem>Ball Joints & Tie Rod End Replacement</CListGroupItem>
                      <CListGroupItem>Suspension Springs Replaced Or Reset</CListGroupItem>
                      <CListGroupItem>
                      Wheel Alignment
                      </CListGroupItem>
                      <CListGroupItem>
                      Front Wheel Bearing Replacement
                      </CListGroupItem>
                      <CListGroupItem>
                      Rear Axle Bearings And Seals Replacement
                      </CListGroupItem>
                    </CListGroup>
                  </CCardBody>
                </CCol>
                <CCol md={4}>
                  <CCardImage
                    style={{ height: "55vh" }}
                    src="https://quartzautocare.com.au/wp-content/uploads/2019/01/suspension-image-w728-o.jpg"
                  />
                </CCol>
              </CRow>
            </CCard>
          </div>
        </div>
      </div>
    </>
  );
}

export default MinorRepair;
