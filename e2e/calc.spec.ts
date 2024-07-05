import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173');
});

test.describe("Start values", () => {
    test('start at 0', async ({ page }) => {
        // Expect button content to be 0 at startup
        await expect(page.locator(".screen")).toHaveText("0");
    });
})

// Each number button should produce the same result
test.describe("Number values", () => {
    test('Num 1', async ({ page }) => {
        await page.locator("#num_1").click();
        await expect(page.locator(".screen")).toHaveText("1");
    });
    test('Num 2', async ({ page }) => {
        await page.locator("#num_2").click();
        await expect(page.locator(".screen")).toHaveText("2");
    });
    test('Num 3', async ({ page }) => {
        await page.locator("#num_3").click();
        await expect(page.locator(".screen")).toHaveText("3");
    });
    test('Num 4', async ({ page }) => {
        await page.locator("#num_4").click();
        await expect(page.locator(".screen")).toHaveText("4");
    });
    test('Num 5', async ({ page }) => {
        await page.locator("#num_5").click();
        await expect(page.locator(".screen")).toHaveText("5");
    });
    test('Num 6', async ({ page }) => {
        await page.locator("#num_6").click();
        await expect(page.locator(".screen")).toHaveText("6");
    });
    test('Num 7', async ({ page }) => {
        await page.locator("#num_7").click();
        await expect(page.locator(".screen")).toHaveText("7");
    });
    test('Num 8', async ({ page }) => {
        await page.locator("#num_8").click();
        await expect(page.locator(".screen")).toHaveText("8");
    });
    test('Num 9', async ({ page }) => {
        await page.locator("#num_9").click();
        await expect(page.locator(".screen")).toHaveText("9");
    });
    test('Num 0', async ({ page }) => {
        await page.locator("#num_0").click();
        await expect(page.locator(".screen")).toHaveText("0");
    });
})

// Ajouter des tests de concaténation de chiffres

// Add
test.describe("Add values", () => {
    test('1+1=2', async ({ page }) => {
        await page.locator("#num_1").click();
        await page.locator("#operation_sum").click();
        await page.locator("#num_1").click();
        await page.locator(".btnEqual").click();
        await expect(page.locator(".screen")).toHaveText("2");
    });
    test('9+9=18', async ({ page }) => {
        await page.locator("#num_9").click();
        await page.locator("#operation_sum").click();
        await page.locator("#num_9").click();
        await page.locator(".btnEqual").click();
        await expect(page.locator(".screen")).toHaveText("18");
    });
});

// Substract
test.describe("Substract values", () => {
    test('2-1=1', async ({ page }) => {
        await page.locator("#num_2").click();
        await page.locator("#operation_minus").click();
        await page.locator("#num_1").click();
        await page.locator(".btnEqual").click();
        await expect(page.locator(".screen")).toHaveText("1");
    });
    test('9-2=7', async ({ page }) => {
        await page.locator("#num_9").click();
        await page.locator("#operation_minus").click();
        await page.locator("#num_2").click();
        await page.locator(".btnEqual").click();
        await expect(page.locator(".screen")).toHaveText("7");
    });
    test('2-7=-5', async ({ page }) => {
        await page.locator("#num_2").click();
        await page.locator("#operation_minus").click();
        await page.locator("#num_7").click();
        await page.locator(".btnEqual").click();
        await expect(page.locator(".screen")).toHaveText("-5");
    });
});

// Mult
test.describe("Mult values", () => {
    test('1*1=1', async ({ page }) => {
        await page.locator("#num_1").click();
        await page.locator("#operation_mult").click();
        await page.locator("#num_1").click();
        await page.locator(".btnEqual").click();
        await expect(page.locator(".screen")).toHaveText("1");
    });
    test('9*9=81', async ({ page }) => {
        await page.locator("#num_9").click();
        await page.locator("#operation_mult").click();
        await page.locator("#num_9").click();
        await page.locator(".btnEqual").click();
        await expect(page.locator(".screen")).toHaveText("81");
    });
});

// Clear
test.describe("Clear", () => {
    test('Add', async ({ page }) => {
        await page.locator("#num_9").click();
        await page.locator("#operation_sum").click();
        await page.locator("#num_9").click();
        await page.locator(".btnEqual").click();
        await page.locator(".btnClear").click();
        await page.locator("#num_1").click();
        await page.locator("#operation_sum").click();
        await page.locator("#num_1").click();
        await page.locator(".btnEqual").click();
        await expect(page.locator(".screen")).toHaveText("2");
    });
    test('Minus', async ({ page }) => {
        await page.locator("#num_9").click();
        await page.locator("#operation_sum").click();
        await page.locator("#num_9").click();
        await page.locator(".btnEqual").click();
        await page.locator(".btnClear").click();
        await page.locator("#num_9").click();
        await page.locator("#operation_minus").click();
        await page.locator("#num_2").click();
        await page.locator(".btnEqual").click();
        await expect(page.locator(".screen")).toHaveText("7");
    });
    test('Mult', async ({ page }) => {
        await page.locator("#num_9").click();
        await page.locator("#operation_sum").click();
        await page.locator("#num_9").click();
        await page.locator(".btnEqual").click();
        await page.locator(".btnClear").click();
        await page.locator("#num_9").click();
        await page.locator("#operation_mult").click();
        await page.locator("#num_9").click();
        await page.locator(".btnEqual").click();
        await expect(page.locator(".screen")).toHaveText("81");
    });
});

// Bouton égal
test('Button equal red', async ({ page }) => {
    await expect(page.locator(".btnEqual")).toHaveCSS("background-color", "rgb(153, 0, 0)");
});

/*
Travail restant :
- Trouver la source du bug sur le bouton clear : si on clique sur autre chose qu'un chiffre après un clear, l'interface est inopérante
- Ajouter les tests de concaténation de chiffres
- Tests d'enchaînement d'opérations
- Test sur la couleur du bouton =

Code validé :
- chiffres
- opérations

Les tests ont conduit à :
- ajouter des IDs signifiants (et conformes aux normes de nommage CSS) sur l'ensemble des éléments
- corriger les fonctions de calcul (addition et soustraction inversées)
- supprimer du code parasite inversant le 3 et le 5
*/