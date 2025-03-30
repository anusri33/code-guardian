package com.example.demo;

import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.InputStreamReader;

@Service
public class ScannerService {

    public String runSemgrep(String codePath) {
        return executeCommand("semgrep --config=p/owasp-top-ten " + codePath + " --json");
    }

    public String runPa11y(String url) {
        return executeCommand("pa11y " + url + " --reporter json");
    }

    public String runZap(String url) {
        return executeCommand("zap-cli --zap-url http://localhost:8080 quick-scan --self-contained --spider --scanners all " + url);
    }

    private String executeCommand(String command) {
        StringBuilder output = new StringBuilder();
        try {
            String os = System.getProperty("os.name").toLowerCase();
            ProcessBuilder pb;
            if (os.contains("win")) {
                pb = new ProcessBuilder("cmd.exe", "/c", command);
            } else {
                pb = new ProcessBuilder("bash", "-c", command);
            }
            pb.redirectErrorStream(true);
            Process process = pb.start();

            BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
            String line;
            while ((line = reader.readLine()) != null) {
                output.append(line).append("\n");
            }
            process.waitFor();
        } catch (Exception e) {
            output.append("Error: ").append(e.getMessage());
        }
        return output.toString();
    }
}
