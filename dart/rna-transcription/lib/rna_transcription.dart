class RnaTranscription {
		String toRna(String strand) {
			Map<String, String> rnaMap = {
				'G': 'C',
				'C': 'G',
				'T': 'A',
				'A': 'U'
			};
			String res = '';
			for (int i = 0; i < strand.length; i++) {
				if (!rnaMap.containsKey(strand[i])) {
					throw new ArgumentError('bad');
				}
				res += rnaMap[strand[i]];
			}
			return res;
		}
}