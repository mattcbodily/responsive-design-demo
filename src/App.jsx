/// *** VANILLA CSS LAYOUT *** ///
import { VanillaLayout } from './layouts/VanillaLayout/VanillaLayout'

/// *** TAILWINDCSS LAYOUT *** ///
import { TailwindLayout } from './layouts/TailwindLayout/TailwindLayout'

function App() {
  return (
    <div>
      {/* <VanillaLayout /> */}
      <TailwindLayout />
    </div>
  )
}

export default App
