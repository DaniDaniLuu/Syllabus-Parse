import Dropzone from "./Dropzone";

function Homepage() {
  return (
    <>
      <section className="section">
        <div className="container">
          <h1 className="dropzone-title">Upload Files</h1>
          <Dropzone />
        </div>
      </section>
    </>
  );
}

export default Homepage;
