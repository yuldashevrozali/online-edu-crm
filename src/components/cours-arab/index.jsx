import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import videonodejs from '../../assets/madara.mp4';
import videonodejs2 from '../../assets/madara.mp4';
import './index.css';

function Arabtili() {
  const modules = [
    {
      name: 'NodeJS',
      topics: [
        'NodeJS nima',
        'NodeJS yuklab olish',
        'VSCode',
        'Node terminalda ishlatish',
        'Node Package Manager. NPM',
        'Global object va module',
        'Module PATH',
        'Module File System. FS',
        'HTTP module',
        'Events module'
      ],
      videos: [videonodejs, videonodejs2] // Videos for topics in NodeJS module
    },
    {
      name: 'ExpressJS',
      topics: [
        'ExpressJS nima',
        'ExpressJS o\'rnatish',
        'ExpressJS route',
        'Middlewares',
        'Templating engines',
        'REST API',
        'Error handling',
        'Database integration',
        'Authentication',
        'Deployment'
      ],
      videos: [] // Add videos as needed
    },
    {
      name: 'Advanced backend',
      topics: [
        'Advanced NodeJS',
        'Security best practices',
        'Performance tuning',
        'Scalability',
        'Load balancing',
        'Caching',
        'WebSockets',
        'GraphQL',
        'Microservices',
        'Serverless architecture'
      ],
      videos: [] // Add videos as needed
    },
    {
      name: 'Full-Stack app',
      topics: [
        'Frontend integration',
        'React basics',
        'State management',
        'Routing in React',
        'Connecting frontend to backend',
        'User authentication',
        'File uploads',
        'Testing',
        'CI/CD',
        'Monitoring'
      ],
      videos: [] // Add videos as needed
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [checkedTopics, setCheckedTopics] = useState({});
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [playing, setPlaying] = useState(true);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [played, setPlayed] = useState(0);
  const [videoUrl, setVideoUrl] = useState(null);
  const [selectedTopicTitle, setSelectedTopicTitle] = useState('');
  const playerRef = useRef(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleCheckboxChange = (moduleIndex, topicIndex) => {
    const key = `${moduleIndex}-${topicIndex}`;
    setCheckedTopics({
      ...checkedTopics,
      [key]: !checkedTopics[key]
    });
  };

  const handleTopicClick = (moduleIndex, topicIndex) => {
    setSelectedTopic(`${moduleIndex}-${topicIndex}`);
    setVideoUrl(modules[moduleIndex].videos[topicIndex]);
    setSelectedTopicTitle(modules[moduleIndex].topics[topicIndex]);
  };

  const totalTopics = modules.reduce((total, module) => total + module.topics.length, 0);
  const completedTopics = Object.values(checkedTopics).filter(Boolean).length;
  const completionPercentage = Math.round((completedTopics / totalTopics) * 100);

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = videoUrl;
    link.download = 'video.mp4';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePlaybackRateChange = (rate) => {
    setPlaybackRate(rate);
  };

  const handleProgress = (state) => {
    setPlayed(state.played);
  };

  const handleSeek = (e) => {
    const seekTo = parseFloat(e.target.value);
    setPlayed(seekTo);
    playerRef.current.seekTo(seekTo);
  };

  const handleCompleteTopic = () => {
    if (selectedTopic) {
      const [moduleIndex, topicIndex] = selectedTopic.split('-').map(Number);
      handleCheckboxChange(moduleIndex, topicIndex);
    }
  };

  return (
    <div className="arab-tili-container">
      <div className="arab-tili">
        <h2>Murakkab backend</h2>
        <div className="progress-container">
          <div className="progress-bar">
            <div className="progress" style={{ width: `${completionPercentage}%` }}></div>
          </div>
          <p>{completionPercentage}% Tugatildi</p>
        </div>
        {modules.map((module, moduleIndex) => (
          <div key={moduleIndex} className={`accordion-item ${activeIndex === moduleIndex ? 'active' : ''}`}>
            <div className="accordion-header" onClick={() => toggleAccordion(moduleIndex)}>
              <h3>{moduleIndex + 1}-Modul. {module.name}</h3>
              <span>{activeIndex === moduleIndex ? '▲' : '▼'}</span>
            </div>
            {activeIndex === moduleIndex && (
              <div className="accordion-content">
                {module.topics.map((topic, topicIndex) => (
                  <div
                    key={topicIndex}
                    className={`topic-item ${selectedTopic === `${moduleIndex}-${topicIndex}` ? 'selected' : ''}`}
                    onClick={() => handleTopicClick(moduleIndex, topicIndex)}
                  >
                    <input
                      type="checkbox"
                      checked={!!checkedTopics[`${moduleIndex}-${topicIndex}`]}
                      onChange={() => handleCheckboxChange(moduleIndex, topicIndex)}
                    />
                    <label>#{topicIndex + 1}. {topic}</label>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="arab-tili-right">
        {selectedTopic && videoUrl && (
          <div className="video-container">
            <ReactPlayer
              ref={playerRef}
              url={videoUrl}
              controls={false}
              playing={playing}
              playbackRate={playbackRate}
              width="90%"
              height="90%"
              onProgress={handleProgress}
            />
            <div className="video-controls">
              <button onClick={handlePlayPause}>{playing ? 'Pause' : 'Play'}</button>
              <button onClick={handleDownload}>Download</button>
              <button onClick={() => handlePlaybackRateChange(0.5)}>0.5x</button>
              <button onClick={() => handlePlaybackRateChange(1)}>1x</button>
              <button onClick={() => handlePlaybackRateChange(1.5)}>1.5x</button>
              <button onClick={() => handlePlaybackRateChange(2)}>2x</button>
            </div>
            <input
              type="range"
              min={0}
              max={1}
              step="any"
              value={played}
              onChange={handleSeek}
              className="progress-bar"
            />
            <div className="topic-title-container">
              <h1>{selectedTopicTitle}</h1>
              <button onClick={handleCompleteTopic}>Darsni Tugatish</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Arabtili;