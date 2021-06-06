import React, { useState, useEffect } from 'react';
import instance from '../../api/axios';
import Slider from 'react-slick';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';
import styles from './PastRecruiters.module.css';
export default function PastRecruiters() {
  const [PR_Objs, setPR_Obj] = useState([]);
  useEffect(() => {
    instance
      .get('main/past_recruiters/')
      .then((res) => {
        setPR_Obj(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const getPR_Objs = () => {
    let list = [];

    PR_Objs.map((PR) => {
      return list.push(
        <div key={PR.id}>
          <div
            style={{
              margin: 10,
              justifyContent: 'center',
              display: 'flex',
            }}
          >
            <CardMedia
              className={styles.PR_image}
              image={PR.company_logo}
              title="Contemplative Reptile"
            />
          </div>
        </div>
      );
    });

    return list;
  };
  var settings = {
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div style={{ background: 'rgb(240,240,240)' }}>
      <div className="py-5">
        <Container
          style={{
            maxWidth: '100%',
          }}
        >
          <div>
            <h2
              style={{
                fontSize: 40,
                justifyContent: 'center',
                display: 'grid',
                marginBottom: -10,
                marginTop: 70,
              }}
            >
              Past Recruiters
            </h2>
            <h3>
              <hr style={{ width: '60%', marginBottom: 35 }} />
            </h3>
          </div>
          <Slider style={{ width: '100%', marginTop: 0 }} {...settings}>
            {getPR_Objs()}
          </Slider>
        </Container>
      </div>
    </div>
  );
}