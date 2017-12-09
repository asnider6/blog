import Link from 'next/link'

const headerStyle = {
  display: 'flex',
  flexDirection: 'row',
  marginTop: -8,
  marginLeft: -8,
  marginRight: -8,
  paddingLeft: 12,
  backgroundColor: '#2b303b',
}

const linkStyle = {
  paddingTop: 6,
  paddingBottom: 6,
  paddingLeft: 12,
  paddingRight: 12,
  margin: 6,
  fontSize: 18,
  backgroundColor: '#8fa1b3',
  border: '1px solid #c0c5ce',
  borderRadius: 3,
  color: '#c0c5ce',
  cursor: 'pointer',
}

const Header = () => (
    <div style={headerStyle}>
      <Link href="/">
        <div style={linkStyle}>Home</div>
      </Link>
      <Link href="/about">
        <div style={linkStyle}>About</div>
      </Link>
    </div>
)

export default Header
