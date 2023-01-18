/** @format */

import { gql, useQuery } from "@apollo/client";
import { Box, Button, Flex, List, ListItem } from "@chakra-ui/react";
import React from "react";

/** @format */
function RaceDayList() {
  const { loading, error, data } = useQuery(GET_RACEDAYS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p> Error </p>;
  const arrayOfRacedays = data.racaDays.data;
  return (
    <>
      <h1
        style={{
          margin: "1em 1.5em",
          fontSize: "1.5em",
        }}
      >
        RaceDays
      </h1>
      <Flex flexDir="column" className="mapOfRaceDays">
        {arrayOfRacedays.map((raceday: any) => (
          <Flex
            borderRadius={"10px"}
            minH={"6em"}
            flexDir={"row"}
            p={"0em 2.2em"}
            justifyContent={"space-between"}
            m={"0.7em 2em"}
            flex={1}
            border={"1px solid black"}
            key={raceday.id}
          >
            <Box textAlign={"center"} alignSelf="center">
              {raceday.attributes.RaceDate}
            </Box>
            <Box alignSelf={"center"}>
              {raceday.attributes.EventDescription}{" "}
            </Box>
            <Box alignSelf={"center"}>{raceday.attributes.RaceDayCapacity}</Box>
            <Box alignSelf={"center"} textAlign="center">
              Prices From €{raceday.attributes.Price}
            </Box>
            <Box alignSelf={"center"}>
              <Button colorScheme={"blue"}>Book</Button>
            </Box>
          </Flex>
        ))}
      </Flex>
    </>
  );
}

export default RaceDayList;
const GET_RACEDAYS = gql`
  {
    racaDays(pagination: { start: 0, limit: 30 }) {
      data {
        id
        attributes {
          EventDescription
          RaceDate
          EventDescription
          Price
        }
      }
    }
  }
`;
