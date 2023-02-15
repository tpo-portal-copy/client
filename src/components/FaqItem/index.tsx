import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from '@chakra-ui/react'
import { FaqProps } from '../../utils/types'

export default function FaqItem({ title, description }: FaqProps) {
  return (
    <AccordionItem margin="1rem 0">
      <h2>
        <AccordionButton backgroundColor="var(--custom-white-v1)">
          <Box as="span" flex="1" textAlign="left">
            {title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel backgroundColor="var(--bg-color)" pb={4}>
        {description}
      </AccordionPanel>
    </AccordionItem>
  )
}
