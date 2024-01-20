/// *** VANILLA CSS LAYOUT *** ///
import { VanillaLayout } from './layouts/VanillaLayout/VanillaLayout'

/// *** TAILWINDCSS LAYOUT *** ///
import { TailwindLayout } from './layouts/TailwindLayout/TailwindLayout'

/// *** BOOTSTRAP LAYOUT *** ///
import { BootstrapLayout } from './layouts/BootstrapLayout/BootstrapLayout'

function App() {
  return (
    <div>
      {/* <VanillaLayout /> */}
      {/* <TailwindLayout /> */}
      <BootstrapLayout />
    </div>
  )
}

export default App
