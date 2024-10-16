// TODO: Export all HybridObjects here

import { NitroModules } from 'react-native-nitro-modules'
import type { Math } from './Math.nitro'

export const MathModule = NitroModules.createHybridObject<Math>('Math')
