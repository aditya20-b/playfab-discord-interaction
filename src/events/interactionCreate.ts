import { Interaction, ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder } from 'discord.js';
import getBetaStatus from '../utils/checkBetaStatus';
import getPlayerName from '../utils/getPlayerName';

async function interactionCreate(interaction: Interaction) {
    // Check if the interaction is a button click and the button is the one we want
    // Can be extended in the future by having a switch case for different buttons
    if (interaction.isButton() && interaction.customId === 'check_beta_status') {
        const modal = new ModalBuilder()
            .setCustomId('enter_player_id_modal')
            .setTitle('Enter Your Player ID')
            .addComponents(
                new ActionRowBuilder<TextInputBuilder>().addComponents(
                    new TextInputBuilder()
                        .setCustomId('player_id_input')
                        .setLabel("Player ID")
                        .setStyle(TextInputStyle.Short)
                        .setRequired(true)
                )
            );

        await interaction.showModal(modal);
    // Check if the interaction is a modal submit and the modal is the one we want
    } else if (interaction.isModalSubmit() && interaction.customId === 'enter_player_id_modal') {
        const playFabId = interaction.fields.getTextInputValue('player_id_input');
        
        try {
            const isBeta = await getBetaStatus(playFabId);
            const playerName  = await getPlayerName(playFabId);
            let replyMessage = 'You dont seem to be a beta player.';
            if (isBeta) {
                replyMessage = `Congratulations ${playerName}! You are a beta player. You have been granted the beta tester role.`;
            }

            await interaction.reply({ content: replyMessage, ephemeral: true });
        } catch (error) {
            console.error('Error checking beta status:', error);
            await interaction.reply({ content: 'Failed to check beta status. Somethign went wrong, inform @aditya20.0.', ephemeral: true });
        }
    }
}

export default interactionCreate;
