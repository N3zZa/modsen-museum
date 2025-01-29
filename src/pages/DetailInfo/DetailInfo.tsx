import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './DetailInfo.css';
import logoImg from '../../assets/logo.svg';

type Props = {};

const DetailInfo = (props: Props) => {
  const { title, image_url } = useLocation().state;
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 250);
  }, []);

  return (
    <>
      {loading ? (
        <h1 className="Detail_loader">Loading...</h1>
      ) : (
        <div className="DetailInfoBlock">
          <div className="DetailInfoInner">
            <div
              style={{
                background: `url(${!!image_url ? image_url : logoImg})`,
                backgroundSize: `${!!image_url ? 'cover' : '80px'}`,
              }}
              className="DetailInfo_img">
              <button className="favoriteButton">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19.5 21.5L12.375 17.5L5.25 21.5V5.5C5.25 4.96957 5.46448 4.46086 5.84625 4.08579C6.22802 3.71071 6.74581 3.5 7.28571 3.5H17.4643C18.0042 3.5 18.522 3.71071 18.9038 4.08579C19.2855 4.46086 19.5 4.96957 19.5 5.5V21.5Z"
                    stroke="#E0A449"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="Detail_info">
              <div className="Detail_title">
                <h2>Charles V, bust length, holding a sword, facing right</h2>
                <h3>Giovanni Britto</h3>
                <p>1535–45</p>
              </div>
              <div className="Detail_overview">
                <h2>Overview</h2>
                <ul>
                  <li>
                    <span>Artist nacionality</span>: German
                  </li>
                  <li>
                    <span>Dimensions</span>: Sheet: 19 3/8 × 13 11/16 in. (49.2
                    × 34.8 cm)
                  </li>
                  <li>
                    <span>Credit Line</span>: Rogers Fund, 1917
                  </li>
                  <li>
                    <span>Repository</span>: Metropolitan Museum of Art, New
                    York, NY
                  </li>
                </ul>
                <p>Public</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailInfo;
