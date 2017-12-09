import Layout from '../components/Layout.js';
import Link from 'next/link';

const PostLink = (props) => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

const headerStyle = {
  alignText: 'center',
  fontSize: 48,
  color: '#2b303b',
}

export default () => (
  <div>

    <Layout>

      <h1 style={headerStyle}>Blog Name Here</h1>
      <ul>
        <PostLink title="Post Title Here"/>

      </ul>
    </Layout>
  </div>

)
