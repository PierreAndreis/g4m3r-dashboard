import React from "react";
import Box from "../../../../components/Box";
import Editor from "../../../../components/Editor";
import HelpModal from "../../../../components/HelpModal";
import HelpContent from "../../../../components/HelpContent";
import HelpText from "../../../../constants/help/general";
import Validation from "../../../../global/validation";
import { Masks } from "../../../../components/InputMask";
import { levelingToggles } from "../../../../constants/general";

const xpCommandsForPoints = ['help', 'info', 'invite', 'server', 'usersettings', 'verify', 'accounts', 'background', 'events', 'games', 'kitten', 'meme', 'puppy', 'urban', 'vg', 'register', 'embed', 'feedback', 'imgur', 'role', 'giveaway', 'profile'];

export default React.memo(() => (
	<React.Fragment>
		<Box padding>
			<Box.Title>XP Gains</Box.Title>
			<Box.Body>
				<Box.Option>
					<div>Per Message</div>
					<div>
						<Editor.Input
							mutate="xpGainPerMessage"
							query="guild.settings.xp.pointsPerMessage"
							type="number"
							validate={Validation.all(
								Validation.isNumber(),
								Validation.numberMin(0)
							)}
						/>
					</div>
					<div>
						<HelpModal content={<HelpContent {...HelpText.leveling.xpGainPerMessage} />} />
					</div>
				</Box.Option>
				<Box.Option>
					<div>Spam Filter Time</div>
					<div>
						<Editor.InputMask
							mask={Masks.minutesToSeconds}
							label="minutes"
							mutate="xpSpamFilterTime"
							type="number"
							query="guild.settings.xp.spamFilterTime"
							validate={Validation.all(
								Validation.isNumber(),
								Validation.numberMin(.1),
								// 24 hours
								Validation.numberMax(1440)
							)}
						/>
					</div>
					<div>
						<HelpModal content={<HelpContent {...HelpText.leveling.xpSpamFilterTime} />} />
					</div>
				</Box.Option>
				{xpCommandsForPoints.map((command, index) => {
					return (
						<Box.Option key={index}>
							<div>Per {command}</div>
							<div>
								<Editor.Input
									mutate={`xpGainPer${command}`}
									query="guild.settings.xp.pointsPerMessage"
									type="number"
									validate={Validation.all(
										Validation.isNumber(),
										Validation.numberMin(0)
									)}
								/>
							</div>
						</Box.Option>
					);
				})}
			</Box.Body>
		</Box>

		<Box padding>
			<Box.Title>Level Up Notifications</Box.Title>
			<Box.Body>
				{levelingToggles.map(opt => {
					return (
						<Box.Option key={opt.title}>
							<div>{opt.title}</div>
							<div>
								<Editor.Checkbox query={opt.query} mutate={opt.mutate} />
							</div>
							<div>
								<HelpModal content={<HelpContent {...opt.help} />} />
							</div>
						</Box.Option>
					)
				})}
			</Box.Body>
		</Box>
	</React.Fragment>
));
