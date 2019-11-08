import foo from 'foo'
import Bar from 'bar'

export default () => (
  <div>
    Imported modules from another workspace:
    <pre>{foo}</pre>
    <Bar />
    <p>
      Also has an <a href="/api/test">API</a>
    </p>
  </div>
)
