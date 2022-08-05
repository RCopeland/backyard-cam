import React from 'react';

export const App = () => {
    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center'}}>
            <video style={{objectFit: 'fill', width: '80vw', borderRadius: '8px'}} src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" controls autoPlay></video>
        </div>
    );
}
