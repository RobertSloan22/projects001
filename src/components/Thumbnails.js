import React from 'react';
import './JumbotronExamples.css';
import reactThumbnail from './reactjs.jpg';
import reactThumbnail2 from './machinelearning.jpg';
import reactThumbnail3 from './mit.jpg';
import reactThumbnail5 from './roboflow.png';
import reactThumbnail6 from './Tensorflow.png';
import reactThumbnail7 from './MDN.png';
import reactThumbnail8 from './whitegithub.png';
import reactThumbnail9 from './openai.png';



const JumbotronExamples = () => {
  const websites = [
    {
    title: 'React.dev Online programing resource',
    src: 'https://react.dev/',
    thumbnail: reactThumbnail,
    },
    {
      title: 'MIT FullStack Developer Program',
      src: 'https://classroom.emeritus.org/courses/1480/pages/video-9-9-9-10-18-36-map-clustering-and-heat-maps?module_item_id=366568',
      thumbnail: reactThumbnail3,
    },
    {
        title: 'Roboflow Machinelearning',
        src: 'https://roboflow.com/',
        thumbnail: reactThumbnail5,
      },
      {
        title: 'Udacity Machine Learning Dashboard',
        src:"https://www.coursera.org/learn/machine-learning/lecture/1ACA2/linear-regression-model-part-1/",
        thumbnail: reactThumbnail2,
      },    
      {
        title: 'TensorFlow Machine Learning',
        src: 'https://www.tensorflow.org/?gad=1&gclid=CjwKCAjwge2iBhBBEiwAfXDBRwFXQskSsZLuChxi3hHwFpFOFEENiOvCpujPv1nEpNIabunoqulmchoCM74QAvD_BwE',
        thumbnail: reactThumbnail6,
      },
      {
        title: 'MDN Docs- Mozilla Developer Network',
        src: 'https://developer.mozilla.org/en-US/docs/Web/API',
        thumbnail: reactThumbnail7,
      },
      {
        title: 'GITHUB',
        src: 'https://github.com/  ',
        thumbnail: reactThumbnail8,
      },
      {
        title: 'OpenAI',
        src: 'https://chat.openai.com/?model=gpt-4',
        thumbnail: reactThumbnail9,
      },
    // Add other websites here
  ];

  return (
    <div className="container my-5">
      <div className="row">
        {websites.map((website, index) => (
          <div key={index} className="col-md-4">
            <div className="card mb-4 box-shadow">
              <img
                className="card-img-top"
                src={website.thumbnail}
                alt={website.title}
              />
              <div className="card-body">
                <h5 className="card-title">{website.title}</h5>
                <div className="d-flex justify-content-between align-items-center">
                  <a
                    className="btn btn-primary"
                    href={website.src}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Site
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JumbotronExamples;
