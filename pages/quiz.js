import Script from 'next/script';
import Layout from '../components/Layout';

export default function Quiz() {
  return (
    <Layout>
      <div className="container mt-4">
        <h1 className="text-center">Personal Quiz</h1>
        <div id="quiz"></div>
        <div className="text-center mt-3">
          <button id="submit" className="btn btn-primary">Submit Quiz</button>
          <div id="results" className="mt-2" />
        </div>
      </div>
      <Script src="/js/quiz.js" strategy="afterInteractive" />
    </Layout>
  );
}
