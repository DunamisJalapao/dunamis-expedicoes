import { Flex, FlexProps, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

type TabsHome = FlexProps & {};

export function TabsHome({ ...rest }: TabsHome) {
  return (
    <Flex {...rest}>

      <Tabs w="full" variant="enclosed" isFitted>
        <TabList >
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>

  )
}