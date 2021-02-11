import React, { useEffect, useState, useRef } from 'react';
import io from 'socket.io-client';
import Peer from 'simple-peer';
import styled from 'styled-components';
import SearchBar from '../navComponents/searchComponents/searchBarComponent';
import '../../styling/temp_tradePage.scss';
import '../../styling/temp_videoChat.scss';
import extraDb from '../../store/extraDb';
import PlatformContainer from '../containerComponents/temp_platformContainer';

const world = 'RocketLeague';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
`;

const Video = styled.video`
  margin: 30px 0px;
`;

function VideoChat() {
  const [yourID, setYourID] = useState('');
  const [users, setUsers] = useState({});
  const [stream, setStream] = useState();
  const [receivingCall, setReceivingCall] = useState(false);
  const [caller, setCaller] = useState('');
  const [callerSignal, setCallerSignal] = useState();
  const [callAccepted, setCallAccepted] = useState(false);

  const userVideo = useRef();
  const partnerVideo = useRef();
  const socket = useRef();

  useEffect(() => {
    console.log('Connected to socket io: ', socket.current);
    socket.current = io.connect('http://localhost:3001');
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setStream(stream);
        if (userVideo.current) {
          userVideo.current.srcObject = stream;
        }
      });

    socket.current.on('yourID', (id) => {
      setYourID(id);
      console.log('setYourID: ', setYourID(id));
    });
    socket.current.on('allUsers', (users) => {
      setUsers(users);
      console.log('allUsers: ', users);
    });

    socket.current.on('hey', (data) => {
      setReceivingCall(true);
      setCaller(data.from);
      setCallerSignal(data.signal);
      console.log('received HEY socket i.o.: ', users);
    });
  }, [socket]);

  function callPeer(id) {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream: stream,
    });

    peer.on('signal', (data) => {
      socket.current.emit('callUser', {
        userToCall: id,
        signalData: data,
        from: yourID,
      });
    });

    peer.on('stream', (stream) => {
      if (partnerVideo.current) {
        partnerVideo.current.srcObject = stream;
      }
    });

    socket.current.on('callAccepted', (signal) => {
      setCallAccepted(true);
      peer.signal(signal);
    });
  }

  function acceptCall() {
    setCallAccepted(true);
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream: stream,
    });
    peer.on('signal', (data) => {
      socket.current.emit('acceptCall', { signal: data, to: caller });
    });

    peer.on('stream', (stream) => {
      partnerVideo.current.srcObject = stream;
    });

    peer.signal(callerSignal);
  }

  let UserVideo;
  if (stream) {
    UserVideo = (
      <Video
        className="temp-video-container"
        playsInline
        muted
        ref={userVideo}
        autoPlay
      />
    );
  }

  let PartnerVideo;
  if (callAccepted) {
    PartnerVideo = (
      <Video
        className="temp-video-container"
        playsInline
        ref={partnerVideo}
        autoPlay
      />
    );
  }

  let incomingCall;
  if (receivingCall) {
    incomingCall = (
      <div>
        <button style={{ background: 'darkred', margin: 10, padding: 10 }}>
          ... trademon call
        </button>
        <button onClick={acceptCall}>Accept</button>
      </div>
    );
  }
  return (
    <div>
      <SearchBar></SearchBar>
      <div className="temp-trading-container">
        <h1 style={{ margin: 10 }}>
          VIDEO CHAT ROOM{' '}
          <span style={{ background: '#075f59', margin: 10 }}> Beta </span>
        </h1>
        <h4 style={{ width: 650, background: '#075f59' }}>
          Video Room # : {yourID}
        </h4>
        <Container>
          <Row>
            {UserVideo}
            <PlatformContainer
              style={{ height: 700 }}
              key={1}
              world={world}
            ></PlatformContainer>
            {PartnerVideo}
          </Row>
          <Row>
            {Object.keys(users).map((key) => {
              if (key === yourID) {
                return null;
              }
              return (
                <button onClick={() => callPeer(key)}>
                  Trademon Video Call
                </button>
              );
            })}
          </Row>
          <Row>{incomingCall}</Row>
        </Container>
      </div>
    </div>
  );
}

export default VideoChat;
