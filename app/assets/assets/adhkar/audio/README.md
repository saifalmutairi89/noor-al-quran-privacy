# Adhkar recordings

The spoken words of each dhikr (not the Quranic verses, which the reciter
recites), recorded by `tools/adhkar_tts.py` in GitHub Actions
(`.github/workflows/adhkar-tts.yml`) and chosen by the app's owner after
listening (voice 0).

- Voice: [tts_arabic](https://github.com/nipponjo/tts_arabic) by nipponjo,
  speaker 0. Code under MIT. Its trained voices are for non-commercial use
  (one voice from the Arabic Speech Corpus by Nawar Halabi, CC BY 4.0; others
  generated with XTTS-v2, Coqui Public Model License); this app is free, with
  no ads or purchases.
- Each file is named by the first 16 hex digits of the SHA-1 of the words as
  read aloud (`spokenText()` in `lib/features/adhkar/data/adhkar_reader.dart`);
  `index.json` lists them. A dhikr without a recording is read by the device's
  voice.
- The pronunciation was accepted by the owner; it still goes to the scholar's
  review with the rest of the adhkar.
