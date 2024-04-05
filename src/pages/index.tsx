import PotreeViewer from '../components/PotreeViewer';
import Script from 'next/script';

export default function Home() {
  return (
    <>
      <Script src="./libs/jquery/jquery-3.1.1.min.js" strategy="beforeInteractive" />
      <Script src="./libs/spectrum/spectrum.js" strategy="beforeInteractive" />
      <Script src="./libs/jquery-ui/jquery-ui.min.js" strategy="beforeInteractive" />
      <Script src="./libs/other/BinaryHeap.js" strategy="beforeInteractive" />
      <Script src="./libs/tween/tween.min.js" strategy="beforeInteractive" />
      <Script src="./libs/d3/d3.js" strategy="beforeInteractive" />
      <Script src="./libs/proj4/proj4.js" strategy="beforeInteractive" />
      <Script src="./libs/openlayers3/ol.js" strategy="beforeInteractive" />
      <Script src="./libs/i18next/i18next.js" strategy="beforeInteractive" />
      <Script src="./libs/jstree/jstree.js" strategy="beforeInteractive" />
      <Script src="./potree/potree.js" strategy="beforeInteractive" />
      <Script src="./libs/plasio/js/laslaz.js" strategy="beforeInteractive" />

      <PotreeViewer pointCloudPath="./pointclouds/catedral/metadata.json" />
    </>
  );
}
