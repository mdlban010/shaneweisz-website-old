import Image from 'next/image';
import Script from 'next/script';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="container">
        <div className="jumbotron text-center">
          <h1 className="display-4">Shane Weisz</h1>
          <Image id="main_image" src="/images/headshot.jpg" width={200} height={400} className="img-thumbnail img-fluid" alt="Shane" />
          <br />
          <p className="lead">
            I recently graduated from the University of Cambridge with a Masters in
            Machine Learning and Machine Intelligence.
          </p>
          <p className="lead">
            I also hold a BSc in Maths, Stats and Computer Science and a BSc (Hons) in
            Computer Science from the University of Cape Town.
          </p>
          <ul className="list-group">
            <li className="list-group-item">
              This website was used to help me learn the basics of front-end web
              development, and gain experience with HTML, CSS and JavaScript.
            </li>
            <li className="list-group-item">
              Relevant personal documents and information can be accessed through the
              Navigation Bar, including my{' '}
              <a id="cv_link" href="/docs/CV_ShaneWeisz.pdf">
                CV
              </a>
              ,{' '}
              <a id="cam_transcript_link" href="/docs/MPhil_OfficialTranscript.pdf">
                Cambridge Transcript
              </a>
              ,{' '}
              <a id="transcript_link" href="/docs/UCT_Transcript.pdf">
                UCT Transcript
              </a>
              , and{' '}
              <a id="mc_link" href="/docs/Matric_Certificate.pdf">
                Matric Certificate
              </a>
              ; as well as links to my{' '}
              <a id="gh_link" href="https://github.com/shaneweisz">
                GitHub
              </a>{' '}
              and{' '}
              <a id="li_link" href="https://www.linkedin.com/in/shaneweisz/">
                LinkedIn
              </a>{' '}
              pages.
            </li>
            <li className="list-group-item">
              Lastly, for some recreation:
              <ul>
                <li>
                  <a id="quiz_link" href="/quiz">
                    Answer 10 questions in a short personal quiz about me.
                  </a>
                </li>
                <li>
                  Play some <a id="tic_tac_toe_link" href="/tic_tac_toe">Tic Tac
                  Toe</a> or{' '}
                  <a id="connect_four_link" href="/connect_four">Connect Four</a> for
                  some world-class fun!
                </li>
                <li>And take a look below at some of the bird photos that I've taken :)</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-6 px-0">
            <Image className="img-thumbnail img-fluid" src="/images/greyheadedkingfisher.jpeg" alt="" width={500} height={500}/>
          </div>
          <div className="col-md-4 col-6 px-0">
            <Image className="img-thumbnail img-fluid" src="/images/heron.jpg" alt="" width={500} height={500}/>
          </div>
          <div className="col-md-4 col-6 px-0">
            <Image className="img-thumbnail img-fluid" src="/images/duskyflycatcher.jpeg" alt="" width={500} height={500}/>
          </div>
          <div className="col-md-4 col-6 px-0">
            <Image className="img-thumbnail img-fluid" src="/images/orangebreastedsunbird.jpeg" alt="" width={500} height={500}/>
          </div>
          <div className="col-md-4 col-6 px-0">
            <Image className="img-thumbnail img-fluid" src="/images/yellowcrownedbishop.jpeg" alt="" width={500} height={500}/>
          </div>
          <div className="col-md-4 col-6 px-0">
            <Image className="img-thumbnail img-fluid" src="/images/caperockjumper.jpeg" alt="" width={500} height={500}/>
          </div>
        </div>
      </div>
      <Script src="/js/index.js" strategy="afterInteractive" />
    </Layout>
  );
}
