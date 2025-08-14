"use client";

import { Flex, Text } from "@radix-ui/themes";
import { ClientServiceCallers } from "../services/serviceCallers";
import { useCallService } from "../services/useCallService";

export default function Home() {
	const { result, isLoading, error } = useCallService(() =>
		ClientServiceCallers.health.ready({}),
	);

	const renderHealthStatus = () => {
		if (isLoading) {
			return <Text>Loading...</Text>;
		}

		if (error) {
			return <Text>Error: {error}</Text>;
		}

		return <Text>{result?.status}</Text>;
	};

	return (
		<Flex
			align="center"
			gap="2"
			justify="center"
			style={{ height: "100vh", width: "100vw" }}
		>
			Hello world!
			{renderHealthStatus()}
		</Flex>
	);
}
