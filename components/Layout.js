import Header from './Header'

const layoutStyle = {
  marginLeft: -12,
  marginRight: -12,
  paddingLeft: 12,
  paddingRight: 12,
  backgroundColor: '#eff1f5',
  height: '100vh',
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <Header></Header>
    {props.children}
  </div>
)

export default Layout
