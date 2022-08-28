export default StatBox = () => {
    return  <Popover onClose={() => setIsOpen(!isOpen)} isOpen={isOpen} placement="top" trigger={triggerProps => {
            return  <Box {...triggerProps} shadow={1} bg="secondary.50" justifyContent="center" rounded={10} ml={1} minH={180} px={3} pb={3} w={170}>
            <Stack alignItems="flex-start" justifyContent="space-between" direction="row">
              <Box p={4} shadow="9" bg="secondary.500" borderRadius="full">
                <Icon  boxSizing="content-box" shadow="9" color="muted.100" borderRadius="full" size="md" as={AntDesign} name="heart" />
              </Box>
            
              
              <IconButton onPress={() => setIsOpen(true)}  icon={<InfoOutlineIcon />} borderRadius="full" _icon={{
                            color: "secondary.100",
                            size: "md"
                          }} _ios={{
                            _icon: {
                              size: "2xl"
                            }
                          }} />
             
            </Stack>
           <Stack>
              <Text fontSize="4xl" bold>0%</Text>
            </Stack>
            <Stack>
              <Text color="muted.600">Average Rating</Text>
            </Stack>
          </Box>;
          }}>
            <Popover.Content accessibilityLabel="Delete Customerd" r={30} w="200">
              <Popover.Arrow bg="muted.600" />
            

              <Popover.Body p={2} _text={{ color : "muted.100" }} bg="muted.600" justifyContent="center">
                Average rating you get in the selected period of time
              </Popover.Body>
              
            </Popover.Content>
          </Popover>
}