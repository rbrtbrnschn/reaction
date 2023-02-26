import { GuessStatus } from "../../interfaces/guess.interface";
import { ReactionStatus } from "../../interfaces/reaction.interface";
import { IReaction } from "../../store/models/reaction.model";

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
