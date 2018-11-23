import gql from "graphql-tag";

export default gql`
	mutation reloadServers {
			reload {
			token
			user {
				id
				username
				tag
				displayAvatarURL
				serverList {
					id
					name
					icon
					memberCount
					ownerID
				}
			}
		}
	}
`;
