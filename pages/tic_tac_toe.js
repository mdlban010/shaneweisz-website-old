import Script from 'next/script';
import Layout from '../components/Layout';

export default function TicTacToe() {
  return (
    <Layout>
      <div className="container mt-4 text-center">
        <h1>Tic Tac Toe</h1>
        <table className="table table-bordered w-auto mx-auto">
          <tbody>
            {Array.from({ length: 3 }).map((_, i) => (
              <tr key={i}>
                {Array.from({ length: 3 }).map((_, j) => (
                  <td key={j}>
                    <button className="btn btn-light"> </button>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Script src="/js/tic_tac_toe.js" strategy="afterInteractive" />
    </Layout>
  );
}
