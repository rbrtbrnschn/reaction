import { GuessStatus } from "../../enums/guess.enum";
import { ReactionStatus } from "../../enums/reaction.enum";
import { IReaction } from "../../interfaces/reaction.interface";

export class ReactionBuilder {
  buildByDuration({ duration }: Pick<IReaction, "duration">): IReaction {
    return {
      duration,
      guesses: [],
      guessStatus: GuessStatus.IS_WAITING,
      reactionStatus: ReactionStatus.HAS_NOT_STARTED,
      isGuessed: false,
    };
  }
  buildWithRandomDuration(resolveDuration?: () => number) {
    const randomDuration = Math.ceil(
      resolveDuration?.() ?? Math.random() * 1000 * Math.ceil(Math.random() * 5)
    );
    return this.buildByDuration({ duration: randomDuration });
  }
}
