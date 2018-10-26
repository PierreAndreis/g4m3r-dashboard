import gql from "graphql-tag";

export default gql`
	mutation editGuild($guildId: String!, $input guildInput!) {
		set(id: $guildId, input: $input) {
			name
			id
			settings {
				settings {
					vip {
						isVIP
						vainglory {
							guildNotificationChannel
							maxInactiveTime
						}
					}
				}
			}
		}
	}
`;
