import React from 'react'
import { randBool } from '../../utils/randgens'
import { MondrianBlock } from '../mondrianBlock'
import { MondrianGrid } from '../mondrianGrid'

type MondrianComposeProps = {
  $horizontal: boolean
  $divisions: number
  $steps: number
}

const OneStep = ({ ...props }: { $horizontal: boolean }) => {
  return randBool() ? (
    <MondrianBlock />
  ) : (
    <MondrianGrid $horizontal={!props.$horizontal}>
      <MondrianBlock />
      <MondrianBlock />
    </MondrianGrid>
  )
}

const TwoSteps = ({ ...props }: { $horizontal: boolean }) => {
  return randBool() ? (
    <MondrianGrid $horizontal={!props.$horizontal}>
      <OneStep $horizontal={!props.$horizontal} />
      <MondrianBlock />
    </MondrianGrid>
  ) : (
    <MondrianGrid $horizontal={!props.$horizontal}>
      <MondrianBlock />
      <OneStep $horizontal={!props.$horizontal} />
    </MondrianGrid>
  )
}

const ThreeSteps = ({ ...props }: { $horizontal: boolean }) => {
  return (
    <MondrianGrid $horizontal={!props.$horizontal}>
      {randBool() ? (
        <TwoSteps $horizontal={!props.$horizontal} />
      ) : (
        <OneStep $horizontal={!props.$horizontal} />
      )}
      {randBool() ? (
        <TwoSteps $horizontal={!props.$horizontal} />
      ) : (
        <OneStep $horizontal={!props.$horizontal} />
      )}
    </MondrianGrid>
  )
}

export const MondrianCompose = ({ ...props }: MondrianComposeProps) => {
  const compose =
    props.$divisions === 3 ? (
      props.$steps === 3 ? (
        <MondrianGrid $horizontal={props.$horizontal}>
          <ThreeSteps $horizontal={props.$horizontal} />
          <ThreeSteps $horizontal={props.$horizontal} />
          <ThreeSteps $horizontal={props.$horizontal} />
        </MondrianGrid>
      ) : props.$steps === 2 ? (
        <MondrianGrid $horizontal={props.$horizontal}>
          <TwoSteps $horizontal={props.$horizontal} />
          <TwoSteps $horizontal={props.$horizontal} />
          <TwoSteps $horizontal={props.$horizontal} />
        </MondrianGrid>
      ) : (
        <MondrianGrid $horizontal={props.$horizontal}>
          <OneStep $horizontal={props.$horizontal} />
          <OneStep $horizontal={props.$horizontal} />
          <OneStep $horizontal={props.$horizontal} />
        </MondrianGrid>
      )
    ) : props.$divisions === 2 ? (
      props.$steps === 3 ? (
        <MondrianGrid $horizontal={props.$horizontal}>
          <ThreeSteps $horizontal={props.$horizontal} />
          <ThreeSteps $horizontal={props.$horizontal} />
        </MondrianGrid>
      ) : props.$steps === 2 ? (
        <MondrianGrid $horizontal={props.$horizontal}>
          <TwoSteps $horizontal={props.$horizontal} />
          <TwoSteps $horizontal={props.$horizontal} />
        </MondrianGrid>
      ) : (
        <MondrianGrid $horizontal={props.$horizontal}>
          <OneStep $horizontal={props.$horizontal} />
          <OneStep $horizontal={props.$horizontal} />
        </MondrianGrid>
      )
    ) : (
      <MondrianBlock />
    )
  return compose
}
