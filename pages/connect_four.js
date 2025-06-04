import Script from 'next/script';
import Layout from '../components/Layout';

export default function ConnectFour() {
  return (
    <Layout>
      <div className="container mt-4">
        <h1 className="text-center">Connect Four</h1>
        <table className="table table-bordered">
          <tbody>
            {Array.from({ length: 6 }).map((_, i) => (
              <tr key={i}>
                {Array.from({ length: 7 }).map((_, j) => (
                  <td key={j}>
                    <button className="btn btn-light"> </button>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Script src="/js/connect_four.js" strategy="afterInteractive" />
    </Layout>
  );
}
