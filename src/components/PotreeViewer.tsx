import React, { useEffect, useRef } from 'react';

interface PotreeViewerProps {
  pointCloudPath: string;
}

const PotreeViewer: React.FC<PotreeViewerProps> = ({ pointCloudPath }) => {
  const potreeContainerRef = useRef(null);
  const potreeScriptSrc = "./libs/potree/potree.js"; // Make sure this path is correct.

  useEffect(() => {
    const script = document.createElement('script');
    script.src = potreeScriptSrc;
    script.onload = () => {
      // The Potree script is loaded and you can initialize Potree here
      const viewer = new Potree.Viewer(potreeContainerRef.current);
      
      // Configuration and point cloud loading code here...
      // Example:
      viewer.setEDLEnabled(true);
      viewer.setFOV(60);
      viewer.setPointBudget(1_000_000);

      Potree.loadPointCloud(pointCloudPath, "PointCloud", e => {
        const pointcloud = e.pointcloud;
        viewer.scene.addPointCloud(pointcloud);
        viewer.fitToScreen();
      });
    };

    // Append the script tag to the body, this will start the script loading process
    document.body.appendChild(script);

    // Clean-up the script tag on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, [pointCloudPath]);

  return <div ref={potreeContainerRef} style={{ width: '100%', height: '500px' }} />;
};

export default PotreeViewer;
