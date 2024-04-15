import Box from '../box/box'
import { genKeyframes } from '../box/styles'
import MGrid from './styles'
import { ReactNode } from 'react'

export type MondrianProps = {
  children?: ReactNode
  $horizontal?: boolean
  $gcol?: string
  $grow?: string
}

type MondrianSimpleProps = {
  children?: ReactNode
  $first?: boolean
  $horizontal?: boolean
  $grid?: string
  key?: number
  animation?: boolean
}

type MondrianComplexProps = {
  $horizontal?: boolean
  $first?: boolean
  gridA?: string
  gridB?: string
  key?: number
}

const MondrianGrid = ({ children, ...props }: MondrianProps) => {
  return <MGrid {...props}>{children}</MGrid>
}

export const MondrianSimple = ({ children, ...props }: MondrianSimpleProps) => {
  if (props.$horizontal) {
    return (
      <MondrianGrid $horizontal $grow={props.$grid}>
        <Box $keyframes={genKeyframes()} $bbot $animation>
          {props.$first ? children : null}
        </Box>
        <Box $keyframes={genKeyframes()} $animation>
          {!props.$first ? children : null}
        </Box>
      </MondrianGrid>
    )
  }

  return (
    <MondrianGrid $gcol={props.$grid}>
      <Box $keyframes={genKeyframes()} $bright $animation>
        {props.$first ? children : null}
      </Box>
      <Box $keyframes={genKeyframes()} $animation>
        {!props.$first ? children : null}
      </Box>
    </MondrianGrid>
  )
}

export const MondrianComplexI = ({ ...props }: MondrianComplexProps) => {
  return (
    <MondrianSimple
      $first={props.$first}
      $horizontal={props.$horizontal}
      $grid={props.gridA}
    >
      <MondrianSimple $horizontal={!props.$horizontal} $grid={props.gridB} />
    </MondrianSimple>
  )
}

//  ============================

// export const MondriannumA = () => {
//   return (
//     <MondrianGrid $gcol="40% 60%">
//       <Box $bright>
//         <MondrianGrid $horizontal $grow="30%">
//           <Box $bbot />
//         </MondrianGrid>
//       </Box>
//       <Box>
//         <MondrianGrid $grow="75% 25%" $horizontal>
//           <Box $bbot>
//             <MondrianGrid $gcol="70%">
//               <Box $bright />
//             </MondrianGrid>
//           </Box>
//           <Box />
//         </MondrianGrid>
//       </Box>
//     </MondrianGrid>
//   )
// }

// ================================================================
