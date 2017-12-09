import Layout from '../components/Layout.js';

export default (props) => (
    <div>
      <Layout>
        <h1>{props.url.query.title}</h1>
        <p>This is the blog post content.</p>
      </Layout>
    </div>
)
